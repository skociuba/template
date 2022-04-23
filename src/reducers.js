import {combineReducers} from 'redux';

import test from './pages/FrontendPaginationSorting/reducers';
import frontendControl from './pages/FrontendControl/reducers';
import backend from './pages/BackendControl/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    frontendControl,
    backend,
  });
export default rootReducer;
