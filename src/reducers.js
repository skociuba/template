import {combineReducers} from 'redux';

import test from './pages/Radio/reducers';
import response from './pages/RequestWithBody/reducers';
import responseOutput from './pages/RequestWithBodyOutput/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    response,
    responseOutput,
  });
export default rootReducer;
