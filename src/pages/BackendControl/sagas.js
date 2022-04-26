import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {
  backendAction,
  fetchBackendSuccess,
  fetchBackendFail,
  fetchTestSuccess,
  fetchTestFail,
} from './actions';
import {getBackendData, getTestData} from './transport';
import {getMappedBackendResponse, getMappedTestResponse} from './responseMappers';
export function* getBackendSaga(action) {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getBackendData, {config, queryParams: action.payload});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchBackendSuccess({data: getMappedBackendResponse(response) || null}));
  } catch (e) {
    yield put(e.message);
    yield put(fetchBackendFail(e));
  }
}

export function* getTestSaga() {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config});
    if (!response) {
      throw console.log('not found');
    }

    yield put(
      fetchTestSuccess({
        data: getMappedTestResponse(response),
      }),
    );
  } catch (e) {
    yield put(e.message);
    yield put(fetchTestFail(e));
  }
}

export default function* () {
  yield all([
    takeLatest(backendAction.FETCH_BACKEND, getBackendSaga),
    takeLatest(backendAction.FETCH_TEST, getTestSaga),
  ]);
}
