import {combineReducers} from 'redux';

import test from './pages/Test/reducers';
import example from './pages/Example/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    example,
    test,
    application,
  });
export default rootReducer;
