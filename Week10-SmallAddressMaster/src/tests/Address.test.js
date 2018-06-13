import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import addresses from '../address-list';

configure({ adapter: new Adapter() });
import dataManager from '../tools/FakeDataManager';

describe('Address tests', function() {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Address
            dataManager={dataManager}
            addressList={addresses[1]}/>);
    });

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    const addressProp = wrapper => wrapper
        .find('WithStyles(AddressShow)')
        .prop('name');

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <Address />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('renders and displays the default first name', () => {
    //     const wrapper = shallow(<Address/>);
    //     expect(wrapper.find('WithStyles(AddressShow)').prop('address').firstName).toEqual(
    //         'Tammy'
    //     );
    // });

    it('renders and displays the default first name', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).firstName);
        expect(addressProp(wrapper).firstName).toEqual('First Name');
    });

    it('renders and displays the default last name', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).lastName).toEqual('Last Name');
    });

    it('renders and displays the default address', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).address).toEqual('Address');
    });

    it('renders and displays the default city', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).city).toEqual('City');
    });

    it('renders and displays the default state', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).state).toEqual('State');
    });

    it('renders and displays the default zip', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).zip).toEqual('Zip');
    });

    it('renders and displays the default phone', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).phone).toEqual('Phone');
    });

    it('renders and displays the default fax', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).fax).toEqual('Fax');
    });

    it('renders and displays the default toll-free', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).tollfree).toEqual('Toll-free');
    });

    it('renders and displays the default website', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).website).toEqual('Website');
    });

    it('renders and displays the default email', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).email).toEqual('Email');
    });

    it('renders and displays the default contact', () => {
        //console.log(wrapper.dive().debug());
        //console.log(addressProp(wrapper).lastName);
        expect(addressProp(wrapper).contact).toEqual('Contact');
    });

    const afterClickFieldTest = wrapper => {
        setImmediate(() => {
            wrapper.update();
            wrapper.instance().setAddress(0);
            setImmediate(() => {
                wrapper.update();
            });
        });
    };

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('WithStyles(AddressShow)').prop('address').firstName
            ).toEqual('Tammy');
        });
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(
                wrapper.find('AddressShow').prop('address').lastName
            ).toEqual('Baldwin');
        });
    });

    it('renders state of address after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').address).toEqual(
                '709 Hart Senate Office Building'
            );
        });
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').city).toEqual(
                'Washington DC'
            );
        });
    });

    it('renders state of state after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').state).toEqual(
                'WI'
            );
        });
    });

    it('renders state of zip after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').zip).toEqual(
                '20510'
            );
        });
    });

    it('renders state of phone after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').phone).toEqual(
                '202-224-5653'
            );
        });
    });

    it('renders state of website after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').website).toEqual(
                'https://www.baldwin.senate.gov'
            );
        });
    });

    it('renders state of email after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').email).toEqual(
                ''
            );
        });
    });

    it('renders state of contact after button click', () => {
        const wrapper = shallow(<Address address={addresses[1]}/>);
        afterClickFieldTest(wrapper, () => {
            expect(wrapper.find('AddressShow').prop('address').contact).toEqual(
                'https://www.baldwin.senate.gov/feedback'
            );
        });
    });
});
