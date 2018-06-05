// import React, {Component} from 'react';
// // import logo2 from '../logo2.svg';
// import { Link } from 'react-router-dom';
// import '../css/menu.css';
// import AppBar from '@material-ui/core/AppBar';
// import Drawer from '@material-ui/core/Drawer';
// import MenuItem from '@material-ui/core/MenuItem';
//
// class Header extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false
//         };
//     }
//
//     handleToggle = () => this.setState({ open: !this.state.open });
//
//     render() {
//         return (
//             <div>
//                 <div className="App">
//                     <AppBar
//                         title="Address Maven"
//                         iconClassNameRight="muidocs-icon-navigation-expand-more"
//                         onLeftIconButtonClick={this.handleToggle}
//                     />
//                     <Drawer
//                         docked={false}
//                         width={200}
//                         open={this.state.open}
//                         onRequestChange={this.handleToggle}
//                     >
//                         <AppBar title="Address Maven"/>
//
//                         <MenuItem
//                             primaryText='Address'
//                             containerElement={<Link to="/"/>}
//                             onClick={this.handleToggle}
//                         />
//
//                         <MenuItem
//                             primaryText='GetFile'
//                             containerElement={<Link to="/get-file"/>}
//                             onClick={this.handleToggle}
//                         />
//
//                         {/*MORE MENU ITEMS HERE*/}
//                     </Drawer>
//                     {/*<ul>*/}
//                     {/*<li><Link to="/">Address</Link></li>*/}
//                     {/*<li><Link to="/get-file">Get File</Link></li>*/}
//                     {/*</ul>*/}
//                     {/*<header className="App-header">*/}
//                     {/*<img src={logo2} className="App-logo" alt="menu logo"/>*/}
//                     {/*<h2 className="App-title">Welcome to React</h2>*/}
//                     {/*</header>*/}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Header;

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { gitItems } from './tileData';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
};


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>{gitItems}</List>
                <Divider />
                {/*<List>{demoItems}</List>*/}
            </div>
        );
        return (
            <div>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Address Maven
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.handleToggle}>
                    <div
                        role="button"
                        onClick={this.handleToggle}
                        onKeyDown={this.handleToggle}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);