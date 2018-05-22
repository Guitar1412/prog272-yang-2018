import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './elf-styles';
import AddressList from './address-list';
import AddressShow from './AddressShow';

export default class Address extends React.Component {
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

    setAddressNext = () => {
        this.setState ({
            address: AddressList[this.addressIndex ++]
        });
        this.debug = true;
    };

    setAddressBack = () => {
        this.setState ({
            address: AddressList[this.addressIndex --]
        });
        if(this.addressIndex = 1)
            this.addressIndex = 4;
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
                                 setAddressNext={this.setAddressNext}
                                 setAddressBack={this.setAddressBack}
                    />
                </View>
            </View>
        );
    }
}
