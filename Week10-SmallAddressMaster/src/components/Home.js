import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
const styles = {};

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography
                    variant="display2"
                    color="primary"
                    align="center"
                    className={classes.flex}
                >
                    <p />
                    Welcome to React!
                </Typography>
                <p />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};
//export default Home;
export default withStyles(styles)(Home);
