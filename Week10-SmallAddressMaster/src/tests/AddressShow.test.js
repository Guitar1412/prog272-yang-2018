import addresses from '../address-list';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });
import React from 'react';
import AddressShow from '../components/AddressShow';
//import ReactDOM from 'react-dom';

describe('AddressShow Shallow Suite', function() {
    let wrapper = null;

    const debug = false;

    const getIndex = (wrapper, index, talkToMe) => {
        if (debug || talkToMe) {
            const ninep = wrapper
                .find('div#addressShow')
                .childAt(index)
                .debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = shallow(<AddressShow address={addresses[0]} />);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.dive().contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name) => {
        wrapper = shallow(<AddressShow address={addresses[0]} setAddress={setAddress}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.dive().find('#setAddress').simulate('click');
        //console.log(wrapper.debug());
        expect(wrapper.dive().contains(patty)).toBe(true);
    };

    const setAddress = () => {
        const address=addresses[1];
        wrapper.setProps({ address: address });
    };


    it('renders and displays the first name', () => {
        defaultFieldTest('First Name: unknown', 0);
        afterClickFieldTest('First Name: ' + addressTest.firstName, 0);
    });

});
