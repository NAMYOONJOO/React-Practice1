import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic01 from './basic01';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StopWatchFunc from './StopWatch';
import Basic02 from './basic02';
import Basic03 from './basic03';
import Basic04 from './basic04';

ReactDOM.render(
  <React.StrictMode>
    <Basic04 />
    <Basic03 />
    <Basic02 />
    <StopWatchFunc />
    <Basic01 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
