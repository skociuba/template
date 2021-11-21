import {combineReducers} from 'redux';

import test from './pages/Radio/reducers';
import response from './pages/ResponseWithBody/reducers';
import responseOutput from './pages/ResponseWithBodyOutput/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    response,
    responseOutput,
  });
export default rootReducer;
