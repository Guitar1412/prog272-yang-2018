import React, {Component} from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';

class AddressShow extends Component {

    render() {
        return (
            <div className="App">
                <p className="App-intro">First Name: {this.props.address.firstName}</p>
                <p className="App-intro">Last Name: {this.props.address.lastName}</p>
                <p className="App-intro">Address: {this.props.address.address}</p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Fax: {this.props.address.fax}</p>
                <p className="App-intro">Tollfree: {this.props.address.tollfree}</p>
                <button id='setAddress' onClick={this.props.setAddress}>Set Address</button>
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
        fax: PropTypes.string,
        tollfree: PropTypes.string
    }),
    setAddress: PropTypes.func
};

export default AddressShow;
