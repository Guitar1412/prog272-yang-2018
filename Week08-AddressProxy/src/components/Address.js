import React, {Component} from 'react';
import '../css/App.css';
//import AddressList from './address-list';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

class Address extends Component {
    constructor(props) {
            super(props);
            this.debug = false;
            this.addressIndex = 0;
            this.addressList = null;
            this.state = {
                address: tempAddressList[this.addressIndex]
            };
            //this.log('Temp Address List:', tempAddressList);
            this.getAddress();



        };
        //this.debug = true;
    getAddress = () =>{
        fetch('/address-list')
            .then((response) => response.json())
            .then((addressListFromServer) => {
                console.log(addressListFromServer);
                this.addressList = addressListFromServer;
            })
            .catch((ex) => {
                console.log(ex);
            })
    }
    setAddress = (offset) => {
        if(this.debug) {
            console.log('setAddress called');
        }
        this.addressIndex += offset;
        this.setState ({
            address: this.addressList[this.addressIndex]

        });
        this.debug = true;
    };


    render() {
        if (this.debug) { console.log('ADDRESS RENDER'); }
        return (
            <div className="App">
                <AddressShow address={this.state.address}
                    setAddress={this.setAddress}/>
            </div>
        );
    }

}

export default Address;
