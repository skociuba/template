import {all, fork} from 'redux-saga/effects';

import checkbox from './pages/Checkbox/sagas';
import select from './pages/Select/sagas';
import test from './pages/Radio/sagas';
import application from './pages/Application/sagas';
import responseOutput from './pages/RequestWithBodyOutput/sagas';
import response from './pages/RequestWithBody/sagas';
const allSagas = [test, application, responseOutput, response, checkbox, select];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
