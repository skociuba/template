import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Application from './pages/Application/Application';
import store from './store';

const Routing = () => (
  <Provider store={store}>
    <HashRouter>
      <Application />
    </HashRouter>
  </Provider>
);

export default Routing;
