import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutesApp from './routes'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RoutesApp />
    </App>
  </React.StrictMode>
);
