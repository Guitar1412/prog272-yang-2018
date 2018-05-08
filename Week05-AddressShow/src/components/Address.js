import React, {Component} from 'react';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        }

    };

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        })
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">FirstName: {this.state.firstName}</p>
                <p className="App-intro">LastName: {this.state.lastName}</p>
                <p className="App-intro">Address: {this.state.address}</p>
                <p className="App-intro">City: {this.state.city}</p>
                <p className="App-intro">State: {this.state.state}</p>
                <p className="App-intro">Zip: {this.state.zip}</p>
                <p className="App-intro">Phone: {this.state.phone}</p>
                <p className="App-intro">Fax: {this.state.fax}</p>
                <p className="App-intro">Tollfree: {this.state.tollfree}</p>
                <p className="App-intro">Website: {this.state.website}</p>
                <button id='setAddress' onClick={this.setAddress}>Set Address</button>

            </div>
        );
    }

}

export default App;
