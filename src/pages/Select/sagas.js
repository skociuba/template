import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {selectAction, fetchSelectSuccess, fetchSelectFail} from './actions';
import {getTestData} from './transport';
import {getMappedTestResponse} from './responseMappers';
export function* getTestSaga() {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchSelectSuccess({data: getMappedTestResponse(response) || null}));
  } catch (e) {
    yield put(console.log(e.message));
    yield put(fetchSelectFail(e));
  }
}

export default function* () {
  yield all([takeLatest(selectAction.FETCH_SELECT, getTestSaga)]);
}
