import {createAction} from 'redux-actions';
import actionNames from 'utils/actionNames';

export const FETCH_BACKEND = 'FETCH_BACKEND';
export const FETCH_BACKEND_SUCCESS = 'FETCH_BACKEND_SUCCESS';
export const FETCH_BACKEND_FAIL = 'FETCH_BACKEND_FAIL';
export const FILTER_ORDER_STATUS = 'FILTER_ORDER_STATUS';

export const backendAction = actionNames([
  FETCH_BACKEND,
  FETCH_BACKEND_SUCCESS,
  FETCH_BACKEND_FAIL,
  FILTER_ORDER_STATUS,
]);

export const fetchBackendData = createAction(backendAction.FETCH_BACKEND);
export const fetchBackendSuccess = createAction(backendAction.FETCH_BACKEND_SUCCESS);
export const fetchBackendFail = createAction(backendAction.FETCH_BACKEND_FAIL);
export const filterOrderStatusData = createAction(backendAction.FILTER_ORDER_STATUS);
