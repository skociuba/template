import {combineReducers} from 'redux';

import frontendControl from './pages/FrontendControl/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    application,
    frontendControl,
  });
export default rootReducer;
