import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';

const getMuiTheme = createMuiTheme({
    palette: {
        primary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700]
        },
        secondary: {
            light: brown[300],
            main: brown[500],
            dark: brown[700]
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={getMuiTheme}>
        <App />
    </MuiThemeProvider>,

    document.getElementById('root')
);

registerServiceWorker();
