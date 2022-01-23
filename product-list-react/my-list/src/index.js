import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import UseStateExplame from './UseStateExplame'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr size="5" color="black"/>
    <UseStateExplame />
  </React.StrictMode>,
  document.getElementById('root')
);

