// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/index.css';
// import App from './components/App';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import darkBaseTheme from '@material-ui/core/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from '@material-ui/core/styles/getMuiTheme';
//
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(
//     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//         <App/>
//     </MuiThemeProvider>,
//     document.getElementById('root'));
// registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/index.css';
// import App from './components/App';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import registerServiceWorker from './registerServiceWorker';
//
//
// const themeDark = createMuiTheme({
//     palette: {
//         type: 'dark'
//     }
// });
//
// ReactDOM.render(
//     <MuiThemeProvider theme={themeDark}>
//         <App/>
//     </MuiThemeProvider>,
//
//     document.getElementById('root')
// );
//
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import registerServiceWorker from './registerServiceWorker';


const themeBlue = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});


const themeCustom = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});


const themePurple = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

const themes = [themeDark, themeBlue, themePurple, themeCustom];

ReactDOM.render(
    <MuiThemeProvider theme={themes[0]}>
        <App/>
    </MuiThemeProvider>,

    document.getElementById('root')
);

registerServiceWorker();