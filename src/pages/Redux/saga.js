import {call, put, all, takeLatest} from 'redux-saga/effects';

import {reduxAction, fetchReduxSuccess, fetchReduxFail} from './actions';
//import {getTestData} from './transport';

const apiUrl = `https://api.thecatapi.com/v1/images/search`;
function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);

    yield put(fetchReduxSuccess(users || null));
  } catch (e) {
    yield put(fetchReduxFail(e));
  }
}
export default function* () {
  yield all([takeLatest(reduxAction.GET_USERS_REQUESTED, fetchUsers)]);
}
