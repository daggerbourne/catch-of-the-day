//These items are not needed because the Router takes care of pointing to the correct component
// import App from './components/App'
// import StorePicker from './components/StorePicker'


import React from 'react';
import { render } from 'react-dom';
import "./css/style.css"
import Router from "./components/Router"

 render(<Router />, document.querySelector('#main')); 