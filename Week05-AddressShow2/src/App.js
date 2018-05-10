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
        this.setState({firstName: 'Patty'});
        this.setState({lastName: 'Murray'});
        this.setState({street: '123 NW AVE'});
        this.setState({city: 'Kirkland'});
        this.setState({state: 'WA'});
        this.setState({zip: '252422'});
        this.setState({county: 'King'});
        this.setState({phoneNumber: '425-111-3232'});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title">Welcome to React</h2>
                </header>
                <p className="App-intro">File: {this.state.file}</p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
                <hr />
            </div>
        );
    }

}

export default App;
