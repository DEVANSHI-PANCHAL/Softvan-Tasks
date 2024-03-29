import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiProvider } from '@reduxjs/toolkit/query/react'; // Corrected import path
import { myApi } from './redux/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={myApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

reportWebVitals();
