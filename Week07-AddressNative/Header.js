import React, {Component} from 'react';
import {Link} from 'react-router-native';
import {Text, View} from 'react-native';
import styles from "./elf-styles";

class Header extends Component {

    render() {
        return (
            <View style={styles.nav}>
                <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Address</Text>
                </Link>
                <Link
                    to="/get-file"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Get File</Text>
                </Link>
            </View>
        );
    }
}

export default Header;