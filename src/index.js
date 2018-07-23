import React from 'react';
import ReactDOM from 'react-dom';
import './Dashboard/Styles/App.css';
import Main from './Dashboard/Components/Main';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
