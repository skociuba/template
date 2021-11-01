import {call, put, all, takeLatest} from 'redux-saga/effects';

import {reduxAction} from './Actions';
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

    console.log(users);
    yield put({type: 'GET_USERS_SUCCESS', users: users});
  } catch (e) {
    yield put({type: 'GET_USERS_FAILED', message: e.message});
  }
}
export default function* () {
  yield all([takeLatest(reduxAction.GET_USERS_REQUESTED, fetchUsers)]);
}
