import {combineReducers} from 'redux';

import test from './pages/Test/reducers';
import application from './pages/Application/reducers';
import test2 from './pages/Redux/Reducer';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    test2,
  });
export default rootReducer;
