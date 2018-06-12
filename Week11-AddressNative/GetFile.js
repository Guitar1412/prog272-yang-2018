import React, {Component} from 'react';
// import FontIcon from 'material-ui/FontIcon';
// import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
// import RaisedButton from 'material-ui/RaisedButton';
import  { Text, View, Button } from 'react-native';

class GetFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'});
    };

    render() {
        return (
            <View style={styles.addressContainer}>
                <Text className={'App-intro'}>file: {this.state.file}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.getFile}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>

        );
    }
}
export default GetFile;