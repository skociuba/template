import {createAction} from 'redux-actions';
import actionNames from 'utils/actionNames';

export const FETCH_BACKEND = 'FETCH_BACKEND';
export const FETCH_BACKEND_SUCCESS = 'FETCH_BACKEND_SUCCESS';
export const FETCH_BACKEND_FAIL = 'FETCH_BACKEND_FAIL';

export const backendAction = actionNames([
  FETCH_BACKEND,
  FETCH_BACKEND_SUCCESS,
  FETCH_BACKEND_FAIL,
]);

export const fetchBackendData = createAction(backendAction.FETCH_BACKEND);
export const fetchBackendSuccess = createAction(backendAction.FETCH_BACKEND_SUCCESS);
export const fetchBackendFail = createAction(backendAction.FETCH_BACKEND_FAIL);
