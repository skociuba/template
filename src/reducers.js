import {combineReducers} from 'redux';

import test from './pages/FrontendPaginationSorting/reducers';
import frontendControl from './pages/FrontendControl/reducers';
import frontendControlWithoutSharedConst from './pages/FrontendControlWithoutSharedConst/reducers';
import application from './pages/Application/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    frontendControl,
    frontendControlWithoutSharedConst,
  });
export default rootReducer;
