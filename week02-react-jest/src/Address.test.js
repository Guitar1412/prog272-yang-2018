import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Jest Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses} />, div);
    });



    //tests for address



});
