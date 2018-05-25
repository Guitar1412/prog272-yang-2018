import React, { Component } from 'react';
import '../css/App.css';
import Address from './Address';
import Header from './Header';
import GetFile from './GetFile';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Address} />
                    <Route path="/get-file" component={GetFile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
