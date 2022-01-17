import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import {shared} from './sharedConstants';
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RadioPage = lazy(() => import('./pages/Radio/RadioDisplay'));
const CheckboxPage = lazy(() => import('./pages/Checkbox/CheckboxDisplay'));
const Select = lazy(() => import('./pages/Select/SelectDisplay'));
const Input = lazy(() => import('./pages/Input/InputDisplay'));
const Grid = lazy(() => import('./pages/Grid/Grid'));
const UseImperativeHandler = lazy(() => import('./pages/UseImperativeHandler/Parent'));
const PassingDataWithURL = lazy(() => import('./pages/PassingDataWithURL/PassingDataWithURL'));
const PassingDataToParent = lazy(() => import('./pages/PassingDataToParent/Parent'));
const RequestWithBody = lazy(() => import('./pages/RequestWithBody/RequestWithBody'));
const RequestWithBodyOutput = lazy(() =>
  import('./pages/RequestWithBodyOutput/RequestWithBodyOutput'),
);
const paths = {...shared.routes};

const routes = [
  {
    path: paths.mainPage.root,
    element: MainPage,
  },
  {
    path: paths.radioPage.root,
    element: RadioPage,
  },
  {
    path: paths.checkboxPage.root,
    element: CheckboxPage,
  },
  {
    path: paths.useImperativeHandler.root,
    element: UseImperativeHandler,
  },
  {
    path: paths.passingDataToParent.root,
    element: PassingDataToParent,
  },
  {
    path: paths.select.root,
    element: Select,
  },
  {
    path: paths.input.root,
    element: Input,
  },
  {
    path: paths.grid.root,
    element: Grid,
  },
  {
    path: paths.requestWithBody.root,
    element: RequestWithBody,
  },
  {
    path: paths.requestWithBodyOutput.root,
    element: RequestWithBodyOutput,
  },
  {
    path: paths.passingDataWithURL.root,
    element: PassingDataWithURL,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route key={i} path={route.path} element={<route.element />} />
    ))}
  </Routes>
);
