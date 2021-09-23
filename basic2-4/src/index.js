import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Basic01 from './basic01';
import Basic02 from './basic02';
import Basic03 from './basic03';
import Basic04 from './basic04';
import Basic05 from './basic05';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Basic05 />
    <Basic04 />
    <Basic03 />
    <Basic02 />
    <Basic01 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
