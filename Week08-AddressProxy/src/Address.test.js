import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import addresses from './components/address-list';
configure({adapter: new Adapter()});

describe('Address tests', function() {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return [
                            {
                                "firstName": "Tammy",
                                "lastName": "Baldwin",
                                "address": "709 Hart Senate Office Building",
                                "city": "Washington DC",
                                "state": "WI",
                                "zip": "20510",
                                "phone": "202-224-5653",
                                "website": "https://www.baldwin.senate.gov",
                                "email": "",
                                "contact": "https://www.baldwin.senate.gov/feedback"
                            }
                        ];
                    }
                });
            });
            return promise;
        });
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider><Address/></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    const afterClickFieldTest = (wrapper, finder) => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
            setImmediate(() => {
                wrapper.update();
                try {
                    finder();
                } catch (e) {
                    console.log(e);
                }
            });
        });
    };
    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Tammy');
        });
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('Baldwin');
        });
    });

    it('renders state of address after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').address).toEqual('709 Hart Senate Office Building');
        });
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').city).toEqual('Washington DC');
        });
    });

    //
    // it.only('renders state of firstName after button click', () => {
    //     const wrapper = shallow(<Address address={addresses[0]}/>);
    //     wrapper.instance().setAddress();
    //     setImmediate(() => {
    //         wrapper.update();
    //         expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Tammy');
    //     });
    // });

    // YOU WRITE TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME, CITY, ETC...
});

