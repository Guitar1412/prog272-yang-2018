import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from "./address-list";
configure({adapter: new Adapter()});

describe('Jest Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses} />, div);
    });


    it('renders state of File paragraph after Set Address button click', () => {
        const wrapper = shallow(<Address addressList={addresses} />);
        const nineSign = <p className="App-intro">FirstName: {this.state.firstName}</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });
    //tests for address



});
