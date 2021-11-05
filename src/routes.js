import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import history from './history';
import Application from './pages/Application/Application';
import store from './store';

const Routing = () => (
  <Provider store={store}>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>
);

export default Routing;
