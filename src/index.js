/* 
  File Name: index.js
  Student's Name: Yash Srivastava
  Student ID: 301382697
  Date: January 28, 2024
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  
);

