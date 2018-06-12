// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import dataManager from '../tools/FakeDataManager';
//
// const themeDark = createMuiTheme({
//     palette: {
//         type: 'dark'
//     }
// });
//
// const addressProp = wrapper => wrapper
//     .find('WithStyles(AddressShow)')
//     .prop('address');
//
// // Later
//
// <MuiThemeProvider theme={themeDark}>
//
//     let  wrapper = null;
//
//     beforeEach(() => {
//     wrapper = shallow(<Address
//         dataManager={dataManager}
//         addressList={addresses} />);
// });
//
//     it('renders and displays the default first name', () => {
//     expect(addressProp(wrapper).firstName).toEqual('unknown');
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import addresses from './components/address-list';
configure({ adapter: new Adapter() });

describe('Address tests', function() {


});
