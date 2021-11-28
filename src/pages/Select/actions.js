import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const FETCH_SELECT = 'FETCH_SELECT';
export const FETCH_SELECT_SUCCESS = 'FETCH_SELECT_SUCCESS';
export const FETCH_SELECT_FAIL = 'FETCH_SELECT_FAIL';

export const selectAction = actionNames([FETCH_SELECT, FETCH_SELECT_SUCCESS, FETCH_SELECT_FAIL]);

export const fetchSelectData = createAction(selectAction.FETCH_SELECT);
export const fetchSelectSuccess = createAction(selectAction.FETCH_SELECT_SUCCESS);
export const fetchSelectFail = createAction(selectAction.FETCH_SELECT_FAIL);
