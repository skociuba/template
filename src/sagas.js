import {all, fork} from 'redux-saga/effects';

import application from './pages/Application/sagas';

const allSagas = [application];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
