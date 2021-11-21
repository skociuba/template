import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {responseAction, fetchResponseSuccess, fetchResponseFail} from './actions';
import {getTestData} from './transport';
import {getMappedTestResponse} from './responseMappers';
export function* getTestSaga(action) {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config, queryParams: action.payload});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchResponseSuccess({data: getMappedTestResponse(response) || null}));
  } catch (e) {
    yield put(console.log(e.message));
    yield put(fetchResponseFail(e));
  }
}

export default function* () {
  yield all([takeLatest(responseAction.FETCH_RESPONSE, getTestSaga)]);
}
