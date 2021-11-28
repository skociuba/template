import {combineReducers} from 'redux';

import checkbox from './pages/Checkbox/reducers';
import test from './pages/Radio/reducers';
import select from './pages/Select/reducers';
import response from './pages/RequestWithBody/reducers';
import responseOutput from './pages/RequestWithBodyOutput/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    checkbox,
    test,
    select,
    application,
    response,
    responseOutput,
  });
export default rootReducer;
