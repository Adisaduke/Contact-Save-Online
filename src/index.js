import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactProvider } from './store/ContactContext';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactProvider>
        <App />
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

