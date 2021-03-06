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

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        //console.log(wrapper.find('AddressShow').prop('address'));
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={AddressList}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Patty');
        });
    //tests for address



});
