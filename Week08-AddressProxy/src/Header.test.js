import Header from './components/Header';
import React from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
//import ReactDOM from 'react-dom';

configure({ adapter: new Adapter() });

describe('Jest App Tests', function() {
    it('render and read first menuItem', () => {
        const wrapper = shallow(<Header />);
        const firstmenuText = wrapper
            .find('MenuItem')
            .first()
            .prop('primaryText');
        console.log('MenuTest', firstmenuText);
        expect(firstmenuText).toBe('Address');
    });

    it('render and read second menuItem', () => {
        const wrapper = shallow(<Header />);
        const secondMenuText = wrapper
            .find('MenuItem')
            .last()
            .prop('primaryText');
        console.log('MenuTest', secondMenuText);
        expect(secondMenuText).toBe('GetFile');
    });
});
