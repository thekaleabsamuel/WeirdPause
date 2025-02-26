import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <Landing />
  </React.StrictMode>
);