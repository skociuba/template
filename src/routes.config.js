import React, {lazy} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {shared} from './routesConstants';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ExamplePage = lazy(() => import('./pages/Example/Example'));
const paths = {...shared.routes};

const routes = [
  {
    path: paths.root,
    redirect: paths.mainPage.root,
    exact: true,
  },
  {
    path: paths.mainPage.root,
    component: MainPage,
    exact: true,
  },
  {
    path: paths.examplePage.root,
    component: ExamplePage,
    exact: true,
  },
];

const allowRedirect = (props) => props.match.url === props.location.pathname;

export const RouteWithSubRoutes = (route) => (
  <Route
    exact={route.exact}
    path={route.path}
    params={route.params}
    render={(props) => {
      return route.redirect && allowRedirect(props) ? (
        <Redirect to={route.redirect} />
      ) : (
        <route.component {...route.props} routes={route.routes} />
      );
    }}
  />
);

export default routes;
