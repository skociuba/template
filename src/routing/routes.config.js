import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';
import RequireParam from 'routing/components/RequireParam';
import RequireSearchParam from 'routing/components/RequireSearchParam';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';

const MainPage = lazy(() => import('pages/MainPage'));
const TestPage = lazy(() => import('pages/Test'));
const paths = {...shared.routes};

let routes = [
  {
    path: paths.root,
    element: MainPage,
    isLocationStateRequire: false,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
    isLocationStateRequire: false,
  },
  {
    path: paths.testPage.root,
    element: TestPage,
    isLocationStateRequire: true,
  },
  {
    path: '*',
    element: MainPage,
    isLocationStateRequire: false,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route
        path={route.path}
        key={i}
        element={
          <RequireSearchParam path={route.path}>
            <RequireParam
              isLocationStateRequire={route.isLocationStateRequire}
              redirectTo={paths.mainPage}>
              <RouteNotFound path={route.path} redirectTo={paths.mainPage.root}>
                <Application>
                  <route.element />
                </Application>
              </RouteNotFound>
            </RequireParam>
          </RequireSearchParam>
        }
      />
    ))}
  </Routes>
);

export default Routing;
