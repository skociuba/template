import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const FrontendPaginationSorting = lazy(() =>
  import('../pages/FrontendPaginationSorting/FrontendPaginationSorting'),
);
const StaticTable = lazy(() => import('../pages/StaticTable/StaticTable'));
const BackendControl = lazy(() => import('../pages/BackendControl/BackendDisplayComponent'));
const FrontendControl = lazy(() => import('../pages/FrontendControl/FrontendDisplayComponent'));
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
    path: paths.frontendPaginationSorting.root,
    element: FrontendPaginationSorting,
    exact: true,
  },
  {
    path: paths.staticTable.root,
    element: StaticTable,
    exact: true,
  },
  {
    path: paths.backendControl.root,
    element: BackendControl,
    exact: true,
  },
  {
    path: paths.frontendControl.root,
    element: FrontendControl,
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
