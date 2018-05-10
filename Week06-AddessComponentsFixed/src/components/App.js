import React, {Component} from 'react';
import '../css/App.css';
import Address from './Address'
import Header from './Header';
import GetFile from "./GetFile";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <GetFile />
            </div>
        );
    }
}

export default App;