import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {backendAction, fetchBackendSuccess, fetchBackendFail} from './actions';
import {getTestData} from './transport';
import {getMappedTestResponse} from './responseMappers';
export function* getTestSaga(action) {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config, queryParams: action.payload});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchBackendSuccess({data: getMappedTestResponse(response) || null}));
  } catch (e) {
    yield put(e.message);
    yield put(fetchBackendFail(e));
  }
}

export default function* () {
  yield all([takeLatest(backendAction.FETCH_BACKEND, getTestSaga)]);
}
