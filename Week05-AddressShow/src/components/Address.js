import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';

class Address extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            foo: 'waiting',
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zip: 'unknown',
            county: 'unknown',
            phoneNumber: 'unknown'
        };
    }

    setAddress =()=>{
        console.log('Address called.');
        this.setState({firstName: 'Patty'});
        this.setState({lastName: 'Murray'});
        this.setState({street: '123 NW AVE'});
        this.setState({city: 'Kirkland'});
        this.setState({state: 'WA'});
        this.setState({zip: '252422'});
        this.setState({county: 'King'});
        this.setState({phoneNumber: '425-111-3232'});
    };
}

export default Address;
