import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hook01 from './Hook01';
import Hook02 from './Hook02';
import Hook03 from './Hook03';

ReactDOM.render(
  <React.StrictMode>
    <Hook03 />
    <Hook02 />
    <Hook01 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
