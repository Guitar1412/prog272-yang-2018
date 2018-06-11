import React, { Component } from 'react';
import '../App.css';
import PouchDB from 'pouchdb';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddressShow from './AddressShow';

const styles = theme => ({
    FormControl: {
        marginLeft: theme.spacing.unit,
    }
});

class Address extends Component {

    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [{
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }]
        };
    }

    componentDidMount() {
        this.db = new PouchDB('address');
        this.remoteCouch = 'http://168.156.46.187:5984/address';
        //this.remoteCouch = false;
        this.syncDom = document.getElementById('sync-wrapper');

        this.db.changes({
            since: 'now',
            live: true
        }).on('change', this.showAddress);
    }

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    setAddress = (offset) => {
        const value = this.state.namesIndex + offset;
        if (value >= 0 && value <= this.state.names.length - 1) {
            this.setState({ namesIndex: value, open: this.state.editOpen });
        }
    };

    save = (name) => {
        console.log(name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (name) => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <AddressShow
                name={this.state.names[this.state.namesIndex]}
                showAddress={this.showAddress}
                setAddress={this.setAddress}
                save={this.save}
                delete={this.delete}
            />
        );
    }
}
Address.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Address);
