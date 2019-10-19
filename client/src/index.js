import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SeaLevel from './SeaLevel';
import ThermalExpansion from './ThermalExpansion';
import IceMelting from './IceMelting';
import * as serviceWorker from './serviceWorker';

import * as ReactBootstrap from 'react-bootstrap';
import { Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
