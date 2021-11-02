import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {reduxAction, fetchReduxSuccess, fetchReduxFail} from './actions';
import {getTestData} from './transport';

function* fetchUsers() {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config});
    if (!response) {
      throw console.log('not found');
    }

    yield put(fetchReduxSuccess(response.payload || null));
  } catch (e) {
    yield put(fetchReduxFail(e));
  }
}
export default function* () {
  yield all([takeLatest(reduxAction.GET_USERS_REQUESTED, fetchUsers)]);
}
