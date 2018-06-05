import React from 'react';
import ReactDOM from "react-dom";
import {createMuiTheme} from "@material-ui/core/styles/index";
import GetFile from "./components/GetFile";
import { BrowserRouter, Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
configure({ adapter: new Adapter() });

describe('GetFile tests', function() {

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <GetFile />
                </BrowserRouter>
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

    // it('renders state of File paragraph after button click', () => {
    //     const wrapper = shallow(<GetFile />);
    //     const nineSign = <p className="App-intro">File: url-file.js</p>;
    //     wrapper.find('#getFile').simulate('click');
    //     expect(wrapper.contains(nineSign)).toBe(true);
    // });
});