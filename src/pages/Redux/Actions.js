import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const reduxAction = actionNames([GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILED]);

export const fetchReduxData = createAction(reduxAction.GET_USERS_REQUESTED);
export const fetchReduxSuccess = createAction(reduxAction.GET_USERS_SUCCESS);
export const fetchReduxFail = createAction(reduxAction.GET_USERS_FAILED);
