import {Component} from "react";

class GetFile extends Component {
getFile = () => {
    console.log('getFile called.');
    this.setState({file: 'url-file.js'})
};
}

export default GetFile;