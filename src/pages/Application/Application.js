import React, {Suspense, useLayoutEffect} from 'react';
import {HashRouter as Switch, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {shared} from 'sharedConstants';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {media, useMedia} from 'components/Media';

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
  const isMobile = useMedia(media.device.mobile);
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
  const content = () => {
    if (isMobile) {
      return (
        <Grid>
          <Row>
            <Cell columns={2}>
              <Menu
                data={headerData}
                handleNavigation={(to) => handleNavigate(history, to)}
                rightSideMenuElements={<div />}
              />
            </Cell>

            <Cell columns={7}>
              <Suspense fallback={<div />}>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Suspense>
            </Cell>
            <Cell>
              <div />
            </Cell>
          </Row>
        </Grid>
      );
    } else {
      return (
        <>
          <Menu
            data={headerData}
            handleNavigation={(to) => handleNavigate(history, to)}
            rightSideMenuElements={<div />}
          />
          <Suspense fallback={<div />}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Suspense>
        </>
      );
    }
  };
  return (
    <div className={applicationWrapper} data-testid="applicationContainer">
      {content()}
    </div>
  );
};
export default Application;
