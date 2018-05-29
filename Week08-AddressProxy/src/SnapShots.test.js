import React from 'react';
import AddressShow from './components/AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from './components/address-list';
import Address from './components/Address';
import App from './components/App';
import Header from './components/Header';
import GetFile from './components/GetFile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
configure({ adapter: new Adapter() });

describe('SnapShot Tests', function() {

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });

    it('renders and reads link before click', () => {
        const wrapper = shallow (<App/>);
        // console.log('App Debug output:');
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    });

    it('renders and reads link before click', () => {
        const addresstree = shallow (
            <MuiThemeProvider>
                <Address />
            </MuiThemeProvider>,
            );
        // console.log('Address Debug output:');
        // console.log(addresstree.debug());
        expect(addresstree).toMatchSnapshot();
    });

    it('renders and reads link before click', () => {
        const getfiletree = shallow (<GetFile/>);
        // console.log('GetFile Debug output:');
        // console.log(getfiletree.debug());
        expect(getfiletree).toMatchSnapshot();
    });

    it('renders and reads link before click', () => {
        const headertree = shallow (<Header/>);
        // console.log('Header Debug output:');
        // console.log(headertree.debug());
        expect(headertree).toMatchSnapshot();
    });

});


