import {combineReducers} from 'redux';

import test from './pages/Radio/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
  });
export default rootReducer;
