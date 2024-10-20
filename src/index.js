import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import emailjs from 'emailjs-com';

const root = ReactDOM.createRoot(document.getElementById('root'));
emailjs.init('Y6gNGYLenaUFOlCH2');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

