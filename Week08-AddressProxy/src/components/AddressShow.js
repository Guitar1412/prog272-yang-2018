import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { red500 } from 'material-ui/styles/colors';
//import ActionAndroid from 'material-ui/svg-icons/action/android';
import styles from './elf-styles';
import FontIcon from 'material-ui/FontIcon';

class AddressShow extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    First Name: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    Last Name: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    Address: {this.props.address.address}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Website: {this.props.address.website}</p>
                <p className="App-intro">Email: {this.props.address.email}</p>
                <p className="App-intro">Contact: {this.props.address.contact}</p>

                {/*<p className="App-intro">Fax: {this.props.address.fax}</p>*/}
                {/*<p className="App-intro">Tollfree: {this.props.address.tollfree}</p>*/}
                {/*<button id='setAddress' onClick={this.props.setAddress}>Set Address</button>*/}
                {/*<RaisedButton*/}
                {/*label="Set Address"*/}
                {/*labelPosition="before"*/}
                {/*primary={true}*/}
                {/*icon={<ActionAndroid />}*/}
                {/*style={styles.button}*/}
                {/*onClick={(event) => this.props.setAddress(1, event)}*/}
                {/*/>*/}
                <RaisedButton
                    id="setAddress2"
                    primary={true}
                    style={styles.button}
                    icon={
                        <FontIcon className="material-icons" color={red500}>
                            arrow_back_ios
                        </FontIcon>
                    }
                    onClick={event => this.props.setAddress(-1, event)}
                />
                <RaisedButton
                    id="setAddress"
                    primary={true}
                    style={styles.button}
                    icon={
                        <FontIcon className="material-icons" color={red500}>
                            arrow_forward_ios
                        </FontIcon>
                    }
                    onClick={event => this.props.setAddress(1, event)}
                />
            </div>
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
        website: PropTypes.string,
        email:PropTypes.string,
        contact: PropTypes.string,
        fax: PropTypes.string,
        tollfree: PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;
