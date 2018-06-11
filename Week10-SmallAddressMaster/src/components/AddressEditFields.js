import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressEditFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e =>
                        this.props.addressChangedByUser('firstName', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e =>
                        this.props.addressChangedByUser('lastName', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="string"
                    value={this.props.address.address}
                    onChange={e =>
                        this.props.addressChangedByUser('address', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    type="string"
                    value={this.props.address.city}
                    onChange={e =>
                        this.props.addressChangedByUser('city', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="state"
                    label="State"
                    type="string"
                    value={this.props.address.state}
                    onChange={e =>
                        this.props.addressChangedByUser('state', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="zip"
                    label="Zip"
                    type="string"
                    value={this.props.address.zip}
                    onChange={e =>
                        this.props.addressChangedByUser('zip', e)
                    }
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="string"
                    value={this.props.address.phone}
                    onChange={e =>
                        this.props.addressChangedByUser('phone', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="fax"
                    label="Fax"
                    type="string"
                    value={this.props.address.fax}
                    onChange={e =>
                        this.props.addressChangedByUser('fax', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="tollfree"
                    label="Toll-free"
                    type="string"
                    value={this.props.address.tollfree}
                    onChange={e =>
                        this.props.addressChangedByUser('tollfree', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="website"
                    label="Website"
                    type="string"
                    value={this.props.address.website}
                    onChange={e =>
                        this.props.addressChangedByUser('website', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="E-mail"
                    type="string"
                    value={this.props.address.email}
                    onChange={e =>
                        this.props.addressChangedByUser('email', e)
                    }
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="contact"
                    label="Contact"
                    type="string"
                    value={this.props.address.fax}
                    onChange={e =>
                        this.props.addressChangedByUser('fax', e)
                    }
                    fullWidth
                />
            </div>
        );
    }
}

AddressEditFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        fax: PropTypes.string,
        tollfree: PropTypes.string,
        website: PropTypes.string,
        email: PropTypes.string,
        contact: PropTypes.string
    })
};

export default AddressEditFields;
