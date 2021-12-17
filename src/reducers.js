import {combineReducers} from 'redux';

import example from './pages/ToDo/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    example,
    application,
  });
export default rootReducer;
