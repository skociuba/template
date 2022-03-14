import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from '../store';

import {Routing} from './routes.config';

const Routes = () => (
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Routing />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);

export default Routes;
