import React, {Component} from 'react';
import logo2 from '../logo2.svg';
import { Link } from 'react-router-dom';
import '../css/menu.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <ul>
                        <li><Link to="/">Address</Link></li>
                        <li><Link to="/get-file">Get File</Link></li>
                    </ul>
                    <header className="App-header">
                        <img src={logo2} className="App-logo" alt="menu logo"/>
                        <h2 className="App-title">Welcome to React</h2>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;