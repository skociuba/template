import {all, fork} from 'redux-saga/effects';

import test from './pages/FrontendPaginationSorting/sagas';
import backend from './pages/BackendControl/sagas';
import application from './pages/Application/sagas';

const allSagas = [test, application, backend];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
