import React, {Suspense, useLayoutEffect} from 'react';
import {HashRouter as Switch} from 'react-router-dom';

import routes, {RouteWithSubRoutes} from '../../routes.config';

const Application = ({appCheckConfig, config}) => {
  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      appCheckConfig();
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
