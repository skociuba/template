import React, {Suspense, useLayoutEffect} from 'react';
import {HashRouter as Switch, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {shared} from 'sharedConstants';

import routes, {RouteWithSubRoutes} from '../../routes.config';

import Menu from './Menu/Menu';
import {appCheckConfig} from './actions';
import {applicationWrapper} from './Application.style';

export const handleNavigate = (history, to) => {
  const toElements = to?.split(':') || [];
  if (toElements.includes('http') || toElements.includes('https')) {
    window.open(to, '_blank');
  } else {
    history.push(to);
  }
};

const Application = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const config = useSelector((state) => state.application.config);

  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      dispatch(appCheckConfig());
    }
  });

  const headerData = {
    ...shared.header,
    menu: {
      ...shared.header.menu,
      primary: [
        ...shared.header.menu.primary.map((menuItem) => {
          return {
            name: menuItem.name,
            to: menuItem.to,
          };
        }),
      ],
    },
  };

  const mappingHederData = headerData.menu.primary.map((item) => item);

  return (
    <div className={applicationWrapper} data-testid="applicationContainer">
      <Menu data={mappingHederData} handleNavigation={(to) => handleNavigate(history, to)} />
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};
export default Application;
