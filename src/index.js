import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Light.ttf';
import './fonts/Poppins-SemiBold.ttf';
import './fonts/PlayfairDisplay-Bold.ttf';
import './fonts/PlayfairDisplay-Medium.ttf';
import './fonts/PlayfairDisplay-Regular.ttf';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
