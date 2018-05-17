import React, {Component} from 'react';
import '../css/App.css';
import AddressList from '../address-list'
import AddressShow from './AddressShow'

class Address extends Component {
    constructor(props) {
        super(props);

        this.addressIndex = 0;
        this.state = {
            address: AddressList[this.addressIndex]

        };
        this.debug = true;

    }

    setAddress = () => {
        this.addressIndex = 1;
        this.setState ({
            address: AddressList[this.addressIndex]

        });
        this.debug = true;
    };


    render() {
        if (this.debug) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow address={this.state.address}
                setAddress={this.setAddress}/>
            </div>
        );
    }

}

export default Address;
