import React from 'react';
import ReactDOM from "react-dom";
import {createMuiTheme} from "@material-ui/core/styles/index";
import GetFile from "./components/GetFile";
import Address from "./components/Address";
import { BrowserRouter, Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from './components/App';
configure({ adapter: new Adapter() });

describe('App tests', function() {

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
                    <App />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads link before click', () => {
        const wrapper = shallow (<App />);
        const routeA = <Route exact path="/" component={Address} />;
        expect(wrapper.contains(routeA)).toBe(true);
    });

    it('renders and reads link before click', () => {
        const wrapper = shallow (<App />);
        const routeF = <Route path="/get-file" component={GetFile} />;
        expect(wrapper.contains(routeF)).toBe(true);
    });
});