import {all, fork} from 'redux-saga/effects';

import backend from './pages/BackendControl/sagas';
import application from './pages/Application/sagas';

const allSagas = [application, backend];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
