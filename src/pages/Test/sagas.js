import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {testAction, fetchTestSuccess, fetchTestFail} from './actions';
import {getTestData} from './transport';

export function* getTestSaga() {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchTestSuccess({data: response || null}));
  } catch (e) {
    yield put(console.log(e.message));
    yield put(fetchTestFail(e));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function*() {
  yield all([takeLatest(testAction.FETCH_TEST, getTestSaga)]);
}
