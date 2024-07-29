import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/static/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render: Render the App component to the root.
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
