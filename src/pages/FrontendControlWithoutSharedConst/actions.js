import {createAction} from 'redux-actions';
import actionNames from 'utils/actionNames';

export const FETCH_TEST = 'FETCH_TEST';
export const FETCH_TEST_SUCCESS = 'FETCH_TEST_SUCCESS';
export const FETCH_TEST_FAIL = 'FETCH_TEST_FAIL';
export const FILTER_ORDER_STATUS = 'FILTER_ORDER_STATUS';

export const testAction = actionNames([
  FETCH_TEST,
  FETCH_TEST_SUCCESS,
  FETCH_TEST_FAIL,
  FILTER_ORDER_STATUS,
]);

export const fetchTestData = createAction(testAction.FETCH_TEST);
export const fetchTestSuccess = createAction(testAction.FETCH_TEST_SUCCESS);
export const fetchTestFail = createAction(testAction.FETCH_TEST_FAIL);
export const filterOrderStatusData = createAction(testAction.FILTER_ORDER_STATUS);
