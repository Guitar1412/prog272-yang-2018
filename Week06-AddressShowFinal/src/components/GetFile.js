import React, {Component} from 'react';

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
            <div className="App">
                <p className="App-intro">File: {this.state.file}</p>
                <button id='getFile' onClick={this.getFile}>Get File</button>
                <hr />
            </div>
        );
    }
}
export default GetFile;