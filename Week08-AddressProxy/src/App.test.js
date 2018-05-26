import App from './components/App';
import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import GetFile from './components/GetFile';
configure({ adapter: new Adapter() });

// Code omitted here
describe('Jest App Tests', function() {
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

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <App />
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
