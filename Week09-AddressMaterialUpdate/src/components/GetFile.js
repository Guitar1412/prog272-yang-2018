import React, {Component} from 'react';
// import FontIcon from '@material-ui/core/FontIcon';
// import { red500 } from '@material-ui/core/styles/colors';
// import styles from './elf-styles';
import Button from '@material-ui/core/Button';

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
            <div className="App">
                <p className="App-intro">File: {this.state.file}</p>
                {/*<button id='getFile' onClick={this.getFile}>Get File</button>*/}
                {/*<Button*/}
                    {/*label="Query Git API"*/}
                    {/*labelPosition="before"*/}
                    {/*primary={true}*/}
                    {/*// icon={<FontIcon*/}
                    {/*//     className="material-icons"*/}
                    {/*//     color={red500}>file_copy</FontIcon>}*/}
                    {/*style={styles.button}*/}
                    {/*onClick={this.getFile}*/}
                {/*/>*/}
                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.getFile}
                    id="getFileBTN"
                >
                    Get File
                </Button>
            </div>
        );
    }
}
export default GetFile;