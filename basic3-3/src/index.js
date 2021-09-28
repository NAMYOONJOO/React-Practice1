import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InchToCm from './InchToCm';
import ColorBoxFunc from './ColorBox';
import ZipInput from './ZipInput';
import CustomForm from './CustomForm';




ReactDOM.render(
  <React.StrictMode>
    <CustomForm/>
    <ZipInput/>
    <ColorBoxFunc/>
    <InchToCm/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
