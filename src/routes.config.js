import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import {shared} from './sharedConstants';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const TestPage = lazy(() => import('./pages/Test/Test'));
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
    path: paths.testPage.root,
    element: TestPage,
    exact: true,
  },
];

export const RouteWithSubRoutes = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route path={route.path} key={i} element={<route.element />} />
    ))}
  </Routes>
);

export default routes;
