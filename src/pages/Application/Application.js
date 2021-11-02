import React, {Suspense, useLayoutEffect} from 'react';
import {HashRouter as Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import routes, {RouteWithSubRoutes} from '../../routes.config';

import {appCheckConfig} from './actions';

const Application = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.application.config);

  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      dispatch(appCheckConfig());
    }
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

Application.defaultProps = {
  appCheckConfig: () => {},
  config: {},
};

export default Application;
