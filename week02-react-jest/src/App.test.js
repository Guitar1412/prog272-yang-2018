import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Jest Tests', function() {

   it.only('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<App />, div);
   });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2 className="App-title">Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">FirstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">LastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default street address', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">City: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default state name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default zip code', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Zip: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default county name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">County: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default phone number', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">PhoneNumber: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">FirstName: Patty</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">LastName: Murray</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Street: 123 NW AVE</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">City: Kirkland</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">State: WA</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Zip: 252422</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">County: King</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">PhoneNumber: 425-111-3232</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    //tests for address



});
