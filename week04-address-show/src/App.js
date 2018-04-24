import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            foo: 'waiting',
            firstName: 'unknown',
            lastName: 'unknown',
            street: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zip: 'unknown',
            county: 'unknown',
            phoneNumber: 'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    setAddress =()=>{
        console.log('Address called.');
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            street: '123 NW AVE',
            city: 'Kirkland',
            state: 'WA',
            zip: '252422',
            county: 'King',
            phoneNumber: '425-111-3232'
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <p className="App-intro">File: {this.state.file}</p>
                <p className="App-intro">FirstName: {this.state.firstName}</p>
                <p className="App-intro">LastName: {this.state.lastName}</p>
                <p className="App-intro">Street: {this.state.street}</p>
                <p className="App-intro">City: {this.state.city}</p>
                <p className="App-intro">State: {this.state.state}</p>
                <p className="App-intro">Zip: {this.state.zip}</p>
                <p className="App-intro">County: {this.state.county}</p>
                <p className="App-intro">PhoneNumber: {this.state.phoneNumber}</p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
                <button id='setAddress' onClick={this.setAddress}>Set Address</button>

            </div>
        );
    }

}

export default App;
