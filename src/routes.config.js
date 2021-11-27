import React, {lazy} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {shared} from './routesConstants';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RadioPage = lazy(() => import('./pages/Radio/RadioDisplay'));
const CheckboxPage = lazy(() => import('./pages/Checkbox/CheckboxDisplay'));
const UseImperativeHandler = lazy(() => import('./pages/UseImperativeHandler/Parent'));
const PassingDataToParent = lazy(() => import('./pages/PassingDataToParent/Parent'));
const RequestWithBody = lazy(() => import('./pages/RequestWithBody/RequestWithBody'));
const RequestWithBodyOutput = lazy(() =>
  import('./pages/RequestWithBodyOutput/RequestWithBodyOutput'),
);
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
    path: paths.radioPage.root,
    component: RadioPage,
    exact: true,
  },
  {
    path: paths.checkboxPage.root,
    component: CheckboxPage,
    exact: true,
  },
  {
    path: paths.useImperativeHandler.root,
    component: UseImperativeHandler,
    exact: true,
  },
  {
    path: paths.passingDataToParent.root,
    component: PassingDataToParent,
    exact: true,
  },
  {
    path: paths.requestWithBody.root,
    component: RequestWithBody,
    exact: true,
  },
  {
    path: paths.requestWithBodyOutput.root,
    component: RequestWithBodyOutput,
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
