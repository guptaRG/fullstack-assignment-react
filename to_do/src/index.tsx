import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import {Theme} from './types';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';


const theme:Theme = {
    button: {
        variant: "light",
        size: "lg"
    },
    header: {
        bg: "light"
    },
    spinner: {
        variant: "dark"
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App theme={theme}/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
