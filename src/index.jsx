import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './static/scss/fonts.scss';
import './static/scss/global.scss';
import './static/scss/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);