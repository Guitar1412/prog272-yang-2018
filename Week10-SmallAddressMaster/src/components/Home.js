import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
const styles = {


};

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography
                    variant="title"
                    color="#f0f"
                    className={classes.flex}
                >
                    Welcome to React!
                </Typography>
            </div>
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,

};
//export default Home;
export default withStyles(styles)(Home);
