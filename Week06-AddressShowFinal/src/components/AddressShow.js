import React, {Component} from 'react';
import '../css/App.css';

class AddressShow extends Component {

    render() {
        return (
            <div className="App">
                <p className="App-intro">FirstName: {this.props.address.firstName}</p>
                <p className="App-intro">LastName: {this.props.address.lastName}</p>
                <p className="App-intro">Address: {this.props.address.address}</p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Fax: {this.props.address.fax}</p>
                <p className="App-intro">Tollfree: {this.props.address.tollfree}</p>
                <p className="App-intro">Website: {this.props.address.website}</p>
                <button id='setAddress' onClick={this.props.setAddress}>Set Address</button>
            </div>
        );
    }

}

export default AddressShow;
