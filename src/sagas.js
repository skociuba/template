import {all, fork} from 'redux-saga/effects';

import test from './pages/Test/sagas';
import application from './pages/Application/sagas';
import test2 from './pages/Redux/saga';
const allSagas = [test, application, test2];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
