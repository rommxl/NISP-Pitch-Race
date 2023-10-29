import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  

// ReactDOM.render(
// <React.StrictMode>
// <App /> 
// </React.StrictMode>,document.getElementById("root"));

