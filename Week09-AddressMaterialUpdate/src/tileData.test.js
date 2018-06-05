import React from 'react';
import ReactDOM from "react-dom";
import {createMuiTheme} from "@material-ui/core/styles/index";
import tileData from "./components/tileData";
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
                    <tileData />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});