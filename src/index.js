import { createRoot } from 'react-dom/client'
import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import './signup.css';
import './addadopter.css';
import './addassociation.css';
import './login.css';
import './petlistpage.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProviderWrapper } from "./context/auth.context"; 
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <Router>
    <AuthProviderWrapper>
     <App /> 
    </AuthProviderWrapper>
  </Router>
  </React.StrictMode>

);


reportWebVitals();
