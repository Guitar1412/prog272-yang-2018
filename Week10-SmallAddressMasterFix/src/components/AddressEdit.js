import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddressEditFields from './AddressEditFields';
import addressList from '../address-list';

//const styles = {};

export default class AddressEdit extends React.Component {
    state = {
        open: this.props.open,
        address: addressList[0]
    };

    userClosedDialogNormal = () => {
        this.props.addressEdit(this.state.address);
    };

    userCanceledDialog = () => {
        this.props.addressEdit(null);
    };

    addressChangedByUser = (v, e) => {
        this.props.address[v] = e.target.value;
        this.setState({ address: this.props.address });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.userClosedDialogNormal}
                    aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">
                        Edit Address
                    </DialogTitle>

                    <DialogContent>
                        <DialogContent>
                            <DialogContentText>
                                Fill in the fields of the address record.
                            </DialogContentText>
                            <AddressEditFields
                                // address={this.props.address}
                                // setAddress={this.setAddress}

                                address={this.props.address}
                                setAddress={this.addressChangedByUser}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.userCanceledDialog} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.userClosedDialogNormal} color="primary">
                                Ok
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
