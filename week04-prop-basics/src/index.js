import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const myProps = {
    testProp: 3
};

const yourProps = {
    testProp: 4
};

ReactDOM.render(<App myProps={myProps} testProp={2} yourProps={yourProps} />, document.getElementById('root'));
registerServiceWorker();
