import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const FETCH_RESPONSE = 'FETCH_RESPONSE';
export const FETCH_RESPONSE_SUCCESS = 'FETCH_RESPONSE_SUCCESS';
export const FETCH_RESPONSE_FAIL = 'FETCH_RESPONSE_FAIL';

export const responseAction = actionNames([
  FETCH_RESPONSE,
  FETCH_RESPONSE_SUCCESS,
  FETCH_RESPONSE_FAIL,
]);

export const fetchResponseData = createAction(responseAction.FETCH_RESPONSE);
export const fetchResponseSuccess = createAction(responseAction.FETCH_RESPONSE_SUCCESS);
export const fetchResponseFail = createAction(responseAction.FETCH_RESPONSE_FAIL);
