import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import {shared} from './sharedConstants';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const TestPage = lazy(() => import('./pages/Test/Test'));
const paths = {...shared.routes};

const routes = [
  {
    path: paths.root,
    element: MainPage,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
  },
  {
    path: paths.testPage.root,
    element: TestPage,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route key={i} path={route.path} element={<route.element />} />
    ))}
  </Routes>
);
