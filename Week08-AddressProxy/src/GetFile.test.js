import React from 'react';
import GetFile from './components/GetFile';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });

// Code omitted here
describe('Jest GetFile Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <GetFile />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads file before click', () => {
        const wrapper = shallow (<GetFile />);
        const before = <p className="App-intro">File: unknown</p>;
        expect(wrapper.contains(before)).toBe(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<GetFile />);
        const nineSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

});
