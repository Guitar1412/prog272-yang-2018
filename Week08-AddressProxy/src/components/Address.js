import React, { Component } from 'react';
import '../css/App.css';
//import AddressList from './address-list';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

class Address extends Component {
    // constructor(props) {
    //     super(props);
    //     this.debug = false;
    //     this.addressIndex = 0;
    //     this.addressList = null;
    //     this.state = {
    //         address: tempAddressList[this.addressIndex]
    //     };
    //     //this.log('Temp Address List:', tempAddressList);
    //     this.getAddress();
    //
    //     this.debug = true;
    // };

    constructor() {
        super();
        this.debug = false;
        this.canceled = false;
        this.state = {
            addressIndex: 0,
            addressList: [{}],
            address: tempAddressList[0]
        };
    }

    componentDidMount() {
        this.getAddress();
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    getAddress = () => {
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer => {
                //console.log(addressListFromServer);
                this.addressList = addressListFromServer;

                if (!this.canceled) {
                    this.setState({ addressList: addressListFromServer });
                    this.setState({ index: 0 });
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };
    setAddress = offset => {
        let value = this.state.addressIndex + offset;

        if (this.debug) {
            console.log('setAddress called');
        }
        value += offset;
        if (value > this.state.addressList.length - 1) {
            value = 0;
        } else if (value < 0) {
            value = this.state.addressList.length - 1;
        }
        this.setState({ addressIndex: value });
        this.setState({
            address: this.state.addressList[value]
        });
        this.debug = true;
    };

    render() {
        if (this.debug) {
            console.log('ADDRESS RENDER');
        }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }
}

export default Address;
