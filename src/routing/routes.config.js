import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';
import RequireParam from 'routing/components/RequireParam';
import RequireSearchParam from 'routing/components/RequireSearchParam';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';

const MainPage = lazy(() => import('pages/MainPage'));
const LandingPage = lazy(() => import('pages/LandingPage'));
const TestPage = lazy(() => import('pages/Test'));
const TestPage2 = lazy(() => import('pages/Test2'));
const paths = {...shared.routes};

let routes = [
  {
    path: paths.root,
    element: LandingPage,
    isLocationStateRequired: false,
  },
  {
    path: paths.landingPage.root,
    element: LandingPage,
    isLocationStateRequired: false,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
    isLocationStateRequired: false,
  },
  {
    path: paths.testPageDefault.root,
    element: TestPage,
    isLocationStateRequired: false,
  },
  {
    path: paths.testPage.root,
    element: TestPage,
    isLocationStateRequired: true,
  },
  {
    path: paths.testPage2.root,
    element: TestPage2,
    isLocationStateRequired: true,
  },
  {
    path: '*',
    element: LandingPage,
    isLocationStateRequired: false,
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
              isLocationStateRequired={route.isLocationStateRequired}
              redirectTo={paths.mainPage.root}>
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
