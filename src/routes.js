import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import Application from './pages/Application/Application';

const Routing = () => (
  <Router>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Router>
);

export default Routing;

