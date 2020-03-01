import React from 'react';
import ReactDOM from 'react-dom';
import   'react-bootstrap';
// import { Button } from 'react-bootstrap';
import './bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
