import React, {Component} from 'react';
// import logo2 from '../logo2.svg';
import { Link } from 'react-router-dom';
import '../css/menu.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <div className="App">
                    <AppBar
                        title="Address Maven"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.handleToggle}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={this.handleToggle}
                    >
                        <AppBar title="Address Maven"/>

                        <MenuItem
                            primaryText='Address'
                            containerElement={<Link to="/"/>}
                            onClick={this.handleToggle}
                        />

                        <MenuItem
                            primaryText='GetFile'
                            containerElement={<Link to="/get-file"/>}
                            onClick={this.handleToggle}
                        />

                        {/*MORE MENU ITEMS HERE*/}
                    </Drawer>
                    {/*<ul>*/}
                    {/*<li><Link to="/">Address</Link></li>*/}
                    {/*<li><Link to="/get-file">Get File</Link></li>*/}
                    {/*</ul>*/}
                    {/*<header className="App-header">*/}
                    {/*<img src={logo2} className="App-logo" alt="menu logo"/>*/}
                    {/*<h2 className="App-title">Welcome to React</h2>*/}
                    {/*</header>*/}
                </div>
            </div>
        );
    }
}

export default Header;