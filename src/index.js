import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import "./firebase"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className="h-14 bg-gradient-to-r from-purple-500 to-pink-500" />
  </React.StrictMode>
);


