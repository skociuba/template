import React, {lazy} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {shared} from './sharedConstants';

const TestPage = lazy(() => import('./pages/MainPage/MainPage'));
const NewPage = lazy(() => import('./pages/Test/Test'));
const Redux = lazy(() => import('./pages/Redux/Redux'));
const paths = {...shared.routes};

const routes = [
  {
    path: paths.root,
    redirect: paths.testPage.root,
    exact: true,
  },
  {
    path: paths.testPage.root,
    component: TestPage,
    exact: true,
  },
  {
    path: paths.newPage.root,
    component: NewPage,
    exact: true,
  },
  {
    path: paths.redux.root,
    component: Redux,
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
