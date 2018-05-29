import React from 'react';
import AddressShow from './components/AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from './components/address-list';

describe('SnapShot Tests', function() {

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });

});