import React from 'react';
//import AddressShow from '../components/AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import addresses from '../address-list';
import Address from '../components/Address';
//import App from '../components/App';
//import Header from '../components/Header';
//import GetFile from './components/GetFile';
//import AddressEdit from '../components/AddressEdit';
//import Home from '../components/Home';
//import InitializeDatabase from '../components/InitializeDatabase';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import AddressEditFields from '../components/AddressEditFields';
configure({ adapter: new Adapter() });

describe('SnapShot Tests', function() {

    // it('should take an AddressShow snapshot', () => {
    //     const elfTree = shallow(<AddressShow name={addresses[0]}/>);
    //     expect(elfTree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const wrapper = shallow (<App/>);
    //     // console.log('App Debug output:');
    //     // console.log(wrapper.debug());
    //     expect(wrapper).toMatchSnapshot();
    // });

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders and reads link before click', () => {
        const addresstree = shallow (
            <MuiThemeProvider theme={themeDark}>
                <Address />
            </MuiThemeProvider>,
        );
        // console.log('Address Debug output:');
        // console.log(addresstree.debug());
        expect(addresstree).toMatchSnapshot();
    });

    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<Header/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<AddressEdit/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<AddressEditFields/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<Home/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<InitializeDatabase/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
    //
    // it('renders and reads link before click', () => {
    //     const headertree = shallow (<tileData/>);
    //     // console.log('Header Debug output:');
    //     // console.log(headertree.debug());
    //     expect(headertree).toMatchSnapshot();
    // });
});


