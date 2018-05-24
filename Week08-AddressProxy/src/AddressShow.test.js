import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AddressShow from './components/AddressShow';
import Address from './components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddressList from './components/address-list';
import getIndex from './components/Address';
configure({adapter: new Adapter()});

describe('AddressShow Shallow Suite', function() {

    let wrapper = null;

    const setAddress = () => {
        const address=addresses[1];
        wrapper.setProps({ address: address });
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={AddressList[0]}/>);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name) => {
        wrapper = shallow(<AddressShow address={addresses[0]} setAddress={setAddress}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.find('#setAddress').simulate('click');
        //console.log(wrapper.debug());
        expect(wrapper.contains(patty)).toBe(true);
    };

    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });


});