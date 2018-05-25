import React from 'react';
//import ReactDOM from 'react-dom';
import AddressShow from './components/AddressShow';
import AddressList from './components/address-list';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
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

    /*
     * Display debug information about a DOM node of a component by index
     * @param {object} wrapper - The HTML generated by your component
     * @param {number} index - Index of HTML element you want to see.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
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

    // it.only('renders without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<MuiThemeProvider><AddressShow/></MuiThemeProvider>, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

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

    // EVENTUALLY YOU WILL NEED TO WRITE MORE TESTS LIKE THE FIRST NAME TEST.
    // THE GOAL WILL BE TO TEST ALL THE PROPERTIES OF OUR COMPONENT.
    // AT FIRST, HOWEVER, JUST KEEP THESE TWO TESTS. WHEN THEY START
    // PASSING, THEN ADD TESTS FOR THE OTHER PROPERTIES SUCH AS LASTNAME...
});
