import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import App from './pages/Application/App';

const Routing = () => (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

export default Routing;

