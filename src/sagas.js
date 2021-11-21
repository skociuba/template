import {all, fork} from 'redux-saga/effects';

import test from './pages/Radio/sagas';
import application from './pages/Application/sagas';
import responseOutput from './pages/RequestWithBodyOutput/sagas';
import response from './pages/RequestWithBody/sagas';
const allSagas = [test, application, responseOutput, response];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
