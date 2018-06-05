import React from 'react';
import ReactDOM from "react-dom";
import {createMuiTheme} from "@material-ui/core/styles/index";
import addresses from './components/address-list';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AddressShow from "./components/AddressShow";
import AddressList from './components/address-list';
configure({ adapter: new Adapter() });

describe('AdressShow tests', function() {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return [
                            {
                                firstName: 'Patty',
                                lastName: 'Murray',
                                address: '154 Russell Senate Office Building',
                                city: 'Washington',
                                state: 'D.C.',
                                zip: '20510',
                                phone: '(202) 224-2621',
                                fax: '(202) 224-0238',
                                tollfree: '(866) 481-9186'
                            }
                        ];
                    }
                });
            });
            return promise;
        });
    });

    const addressTest = {
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
        fax: '(202) 224-0238',
        tollfree: '(866) 481-9186'
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

    const debug = false;

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[0]} />);
        getIndex(wrapper, index, talkToMe);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[1]} />);
        getIndex(wrapper, index, talkToMe);
    };

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MuiThemeProvider theme={themeDark}><AddressShow address={addresses[0]}/></MuiThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

    it('renders and displays the first name of AddressIndex 1', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: Patty', 1);
    });
});