import React from 'react';
// reactDOM allows us to interact with DOM in the browser
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// reactDOM has got a method called render
// root.render means to put all the app in the root which has been gotten from index,html
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


