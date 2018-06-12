import React, {Component} from 'react';
// import '../css/App.css';
import PropTypes from 'prop-types';
// import RaisedButton from 'material-ui/RaisedButton';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';
import {Button, Text, View} from 'react-native';

class AddressShow extends Component {

    render() {
        return (
            <View className="App">
                <Text className="App-intro" style={styles.textAlign}>First Name: {this.props.address.firstName}</Text>
                <Text className="App-intro" style={styles.textAlign}>Last Name: {this.props.address.lastName}</Text>
                <Text className="App-intro" style={styles.textAlign}>Address: {this.props.address.address}</Text>
                <Text className="App-intro" style={styles.textAlign}>City: {this.props.address.city}</Text>
                <Text className="App-intro" style={styles.textAlign}>State: {this.props.address.state}</Text>
                <Text className="App-intro" style={styles.textAlign}>Zip: {this.props.address.zip}</Text>
                <Text className="App-intro" style={styles.textAlign}>Phone: {this.props.address.phone}</Text>
                <Text className="App-intro" style={styles.textAlign}>Fax: {this.props.address.fax}</Text>
                <Text className="App-intro" style={styles.textAlign}>Tollfree: {this.props.address.tollfree}</Text>

                <View style={styles.addressContainer}>
                    <View style={styles.buttonView}>
                        <Button
                            onPress={this.props.setAddress}
                            title="Prev"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                            onPress={(event) => this.props.setAddress(-1, event)}
                        />
                        <Button
                            onPress={this.props.setAddress}
                            title="Next"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                            onPress={(event) => this.props.setAddress(1, event)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

AddressShow.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        fax: PropTypes.string,
        tollfree: PropTypes.string
    }),
    setAddress: PropTypes.func

};

export default AddressShow;
