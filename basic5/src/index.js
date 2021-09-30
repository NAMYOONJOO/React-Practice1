import React from 'react';
import ReactDOM from 'react-dom';
import FluxView from './fluxView';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterTest1 from './routerTest1';
import RouterTest2 from './routerTest2';

ReactDOM.render(
  <React.StrictMode>
    <RouterTest2 />
    <RouterTest1 />
    <FluxView />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
