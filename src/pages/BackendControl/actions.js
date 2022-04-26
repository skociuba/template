import {createAction} from 'redux-actions';
import actionNames from 'utils/actionNames';

export const FETCH_BACKEND = 'FETCH_BACKEND'; //FETCH_BACKEND - resultData
export const FETCH_BACKEND_SUCCESS = 'FETCH_BACKEND_SUCCESS';
export const FETCH_BACKEND_FAIL = 'FETCH_BACKEND_FAIL';
export const FILTER_DATA = 'FILTER_DATA';
export const TOGGLE_DATA = 'TOGGLE_DATA';
export const SORT_DATA = 'SORT_DATA';
export const RESET_DATA = 'RESET_DATA';
export const FETCH_TEST = 'FETCH_TEST'; //FETCH_TEST - criteriaData
export const FETCH_TEST_SUCCESS = 'FETCH_TEST_SUCCESS';
export const FETCH_TEST_FAIL = 'FETCH_TEST_FAIL';

export const backendAction = actionNames([
  FETCH_BACKEND,
  FETCH_BACKEND_SUCCESS,
  FETCH_BACKEND_FAIL,
  FETCH_TEST,
  FETCH_TEST_SUCCESS,
  FETCH_TEST_FAIL,
  FILTER_DATA,
  SORT_DATA,
  TOGGLE_DATA,
  RESET_DATA,
]);

export const fetchBackendData = createAction(backendAction.FETCH_BACKEND);
export const fetchBackendSuccess = createAction(backendAction.FETCH_BACKEND_SUCCESS);
export const fetchBackendFail = createAction(backendAction.FETCH_BACKEND_FAIL);
export const fetchTestData = createAction(backendAction.FETCH_TEST);
export const fetchTestSuccess = createAction(backendAction.FETCH_TEST_SUCCESS);
export const fetchTestFail = createAction(backendAction.FETCH_TEST_FAIL);
export const filterData = createAction(backendAction.FILTER_DATA);
export const sortData = createAction(backendAction.SORT_DATA);
export const toggleData = createAction(backendAction.TOGGLE_DATA);
export const resetData = createAction(backendAction.RESET_DATA);
