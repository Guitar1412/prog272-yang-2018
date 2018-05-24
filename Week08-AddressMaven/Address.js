import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './elf-styles';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';

export default class Address extends React.Component {
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

        this.debug = true;
    };

    getAddress = () =>{
        fetch('http://ec2-35-167-164-195.us-west-2.compute.amazonaws.com:30026/address-list')
            .then((response) => response.json())
            .then((addressListFromServer) => {
                //console.log(addressListFromServer);
                this.addressList = addressListFromServer;
            })
            .catch((ex) => {
                console.log(ex);
            })
    };

    setAddress = (offset) => {
        if(this.debug) {
            console.log('setAddress called');
        }
        this.addressIndex += offset;
        if (this.addressIndex > this.addressList.length -1){
            this.addressIndex = 0;
        }
        else if (this.addressIndex < 0){
            this.addressIndex = this.addressList.length -1;

        }
        this.setState ({
            address: this.addressList[this.addressIndex]

        });
        this.debug = true;
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textAlign}>
                    Welcome to Expo!!
                </Text>
                <View className="App">
                    <AddressShow address={this.state.address}
                                 setAddress={this.setAddress}
                    />
                </View>
            </View>
        );
    }
}
