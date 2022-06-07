import React from 'react';
import ReactDOM from 'react-dom';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './css/logintype.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SSRProvider>
    <App />
    </SSRProvider>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
