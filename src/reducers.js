import {combineReducers} from 'redux';

import backend from './pages/BackendControl/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    application,
    backend,
  });
export default rootReducer;
