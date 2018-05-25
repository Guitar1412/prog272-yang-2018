import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';

class GetFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'unknown'
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({ file: 'url-file.js' });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">File: {this.state.file}</p>
                {/*<button id='getFile' onClick={this.getFile}>Get File</button>*/}
                <RaisedButton
                    label="Query Git API"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={red500}>
                            file_copy
                        </FontIcon>
                    }
                    style={styles.button}
                    onClick={this.getFile}
                />
            </div>
        );
    }
}
export default GetFile;
