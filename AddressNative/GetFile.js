import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import elfStyles from './elf-style';

class GetFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'unknown'
        }
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    render() {
        return (
            <View style={elfStyles.addressContainer}>
                <Text className={"App-intro"}>file: {this.state.file}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.getFile}
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
        );
    }
}
export default GetFile;