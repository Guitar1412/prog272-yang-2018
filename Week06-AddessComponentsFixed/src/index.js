import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Address from './components/Address'
import registerServiceWorker from './registerServiceWorker';
import addresses from './address-list';

ReactDOM.render(
    <div>
        <App />,
        <Address addressList={addresses} />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
