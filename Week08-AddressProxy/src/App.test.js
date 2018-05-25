import App from './components/App';
import React from 'react';
//import Route from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';
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

    // it('renders to display Address link', () =>{
    //     const wrapper = shallow(<Route/>);
    //     expect(wrapper.find(exact path)).toEqual('/');
    // });

    // it.only('renders and reads H2 text', () => {
    //     const wrapper = shallow(<App />);
    //     const welcome = <h2>Welcome to React</h2>;
    //     expect(wrapper.contains(welcome)).toEqual(true);
    // });
});
