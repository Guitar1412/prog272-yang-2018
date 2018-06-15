// import addresses from '../address-list';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
// import React from 'react';
// //import ReactDOM from 'react-dom';
// import AddressShow from '../components/AddressShow';
//
// describe('AddressShow Shallow Suite', function() {
//     let wrapper = null;
//
//     const debug = true;
//
//     const addressTest = {
//         firstName: 'Patty',
//         lastName: 'Murray',
//         street: '154 Russell Senate Office Building',
//         city: 'Washington',
//         state: 'D.C.',
//         zip: '20510',
//         phone: '(202) 224-2621',
//         fax: '(202) 224-0238',
//         tollfree: '(866) 481-9186'
//     };
//
//     const setAddress = () => {
//         const address=addresses[1];
//         wrapper.setProps({ name: address });
//     };
//
//     const getIndex = (wrapper, index, talkToMe) => {
//         if (debug || talkToMe) {
//             const ninep = wrapper
//                 .find('div#addressShow')
//                 .childAt(index)
//                 .debug();
//             console.log('NINEP:', ninep);
//         }
//     };
//
//     const defaultFieldTest = (name, index, talkToMe) => {
//         const wrapper = shallow(<AddressShow address={addresses[0]} />);
//         const welcome = <p className="App-intro">{name}</p>;
//         getIndex(wrapper.dive(), index, talkToMe);
//         expect(wrapper.dive().contains(welcome)).toEqual(true);
//     };
//
//     const afterClickFieldTest = (name) => {
//         wrapper = shallow(<AddressShow address={addresses[0]} setAddress={setAddress}/>);
//         const patty = <p className="App-intro">{name}</p>;
//         wrapper.dive().find('#setAddress').simulate('click');
//         //console.log(wrapper.debug());
//         expect(wrapper.dive().contains(patty)).toBe(true);
//     };
//
//     it('renders and displays the first name', () => {
//         defaultFieldTest('First Name: unknown', 0);
//         afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
//     });
//
// });

import React from 'react';
//import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import AddressList from '../address-list';
//import { MuiThemeProvider } from '@material-ui/core/styles';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
//import addresses from '../address-list';
//import Address from './components/Address';
configure({ adapter: new Adapter() });

describe('AddressShow Shallow Suite', function() {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return [
                            {
                                firstName: 'Tammy',
                                lastName: 'Baldwin',
                                address: '709 Hart Senate Office Building',
                                city: 'Washington DC',
                                state: 'WI',
                                zip: '20510',
                                phone: '202-224-5653',
                                website: 'https://www.baldwin.senate.gov',
                                email: '',
                                contact:
                                    'https://www.baldwin.senate.gov/feedback'
                            }
                        ];
                    }
                });
            });
            return promise;
        });
    });

    const debug = false;

    const addressTest = {
        firstName: 'Tammy',
        lastName: 'Baldwin',
        address: '709 Hart Senate Office Building',
        city: 'Washington DC',
        state: 'WI',
        zip: '20510',
        phone: '202-224-5653',
        website: 'https://www.baldwin.senate.gov',
        email: '',
        contact: 'https://www.baldwin.senate.gov/feedback'
    };

    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper
                .find('div#addressShow')
                .childAt(index)
                .debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[0]} />);
        getIndex(wrapper, index, talkToMe);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[1]} />);
        getIndex(wrapper, index, talkToMe);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

    it('renders and displays the first name of AddressIndex 1', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: Tammy', 1);
    });

    it('renders and displays the last name ', () => {
        defaultFieldTest('Last Name: unknown', 0);
        afterClickFieldTest('Last Name: ' + addressTest.lastName, 0);
    });

    it('renders and displays the last name of AddressIndex 1', () => {
        defaultFieldTest('Last Name: unknown', 0);
        afterClickFieldTest('Last Name: Baldwin', 1);
    });

    it('renders and displays the address ', () => {
        defaultFieldTest('Address: unknown', 0);
        afterClickFieldTest('Address: ' + addressTest.address, 0);
    });

    it('renders and displays the address of AddressIndex 1', () => {
        defaultFieldTest('Address: unknown', 0);
        afterClickFieldTest('Address: 709 Hart Senate Office Building', 1);
    });

    it('renders and displays the city', () => {
        defaultFieldTest('City: unknown', 0);
        afterClickFieldTest('City: ' + addressTest.city, 0);
    });

    it('renders and displays the city of AddressIndex 1', () => {
        defaultFieldTest('City: unknown', 0);
        afterClickFieldTest('City: Washington DC', 1);
    });

    it('renders and displays the state', () => {
        defaultFieldTest('State: unknown', 0);
        afterClickFieldTest('State: ' + addressTest.state, 0);
    });

    it('renders and displays the state of AddressIndex 1', () => {
        defaultFieldTest('State: unknown', 0);
        afterClickFieldTest('State: WI', 1);
    });

    it('renders and displays the zip', () => {
        defaultFieldTest('Zip: unknown', 0);
        afterClickFieldTest('Zip: ' + addressTest.zip, 0);
    });

    it('renders and displays the Zip of AddressIndex 1', () => {
        defaultFieldTest('Zip: unknown', 0);
        afterClickFieldTest('Zip: 20510', 1);
    });

    it('renders and displays the phone', () => {
        defaultFieldTest('Phone: unknown', 0);
        afterClickFieldTest('Phone: ' + addressTest.phone, 0);
    });

    it('renders and displays the phone of AddressIndex 1', () => {
        defaultFieldTest('Phone: unknown', 0);
        afterClickFieldTest('Phone: 202-224-5653', 1);
    });

    it('renders and displays the website', () => {
        defaultFieldTest('Website: unknown', 0);
        afterClickFieldTest('Website: ' + addressTest.website, 0);
    });

    it('renders and displays the website of AddressIndex 1', () => {
        defaultFieldTest('Website: unknown', 0);
        afterClickFieldTest('Website: https://www.baldwin.senate.gov', 1);
    });

    it('renders and displays the website', () => {
        defaultFieldTest('Website: unknown', 0);
        afterClickFieldTest('Website: ' + addressTest.website, 0);
    });

    it('renders and displays the website of AddressIndex 1', () => {
        defaultFieldTest('Website: unknown', 0);
        afterClickFieldTest('Website: https://www.baldwin.senate.gov', 1);
    });

    it('renders and displays the email', () => {
        defaultFieldTest('Email: unknown', 0);
        afterClickFieldTest('Email: ' + addressTest.email, 0);
    });

    it('renders and displays the email of AddressIndex 1', () => {
        defaultFieldTest('Email: unknown', 0);
        afterClickFieldTest('Email: ', 1);
    });

    it('renders and displays the contact', () => {
        defaultFieldTest('Contact: unknown', 0);
        afterClickFieldTest('Contact: ' + addressTest.contact, 0);
    });

    it('renders and displays the contact of AddressIndex 1', () => {
        defaultFieldTest('Contact: unknown', 0);
        afterClickFieldTest(
            'Contact: https://www.baldwin.senate.gov/feedback',
            1
        );
    });
});
