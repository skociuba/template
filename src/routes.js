import React from 'react';
import {Router} from 'react-router-dom';

import Provider from './context/Provider';
import history from './history';
import Application from './pages/Application/Application';

const Routing = () => (
  <Provider>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>
);

export default Routing;
