import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const ErrorsDisplay = lazy(() => import('../pages/ErrorsDisplay/ErrorDisplay'));
const ValidationDisplay = lazy(() => import('../pages/ValidationDisplay/ValidationDisplay'));
const WizardDisplay = lazy(() => import('../pages/WizardDisplay/WizardDisplay'));
const ListDisplay = lazy(() => import('../pages/ListDisplay/ListDisplay'));
const SearchDisplay = lazy(() => import('../pages/SearchDisplay/SearchDisplay'));
const InputDisplay = lazy(() => import('../pages/InputDisplay/InputDisplay'));
const paths = {...shared.routes};

let routes = [
  {
    path: paths.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.errorPage.root,
    element: ErrorsDisplay,
    exact: true,
  },
  {
    path: paths.validationDisplay.root,
    element: ValidationDisplay,
    exact: true,
  },
  {
    path: paths.wizardDisplay.root,
    element: WizardDisplay,
    exact: true,
  },
  {
    path: paths.listDisplay.root,
    element: ListDisplay,
    exact: true,
  },
  {
    path: paths.searchDisplay.root,
    element: SearchDisplay,
    exact: true,
  },
  {
    path: paths.inputDisplay.root,
    element: InputDisplay,
    exact: true,
  },
  {
    path: '*',
    element: MainPage,
    exact: true,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route
        path={route.path}
        key={i}
        element={
          <RouteNotFound path={route.path} redirectTo={paths.mainPage.root}>
            <Application>
              <route.element />
            </Application>
          </RouteNotFound>
        }
      />
    ))}
  </Routes>
);

export default Routing;
