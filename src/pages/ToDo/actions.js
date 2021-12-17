import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const RESET_POST = 'RESET_POST';
export const DONE_TASK = 'DONE_TASK';
export const FILTER_TASK = 'FILTER_TASK';

export const testAction = actionNames([
  FETCH_POST,
  ADD_POST,
  REMOVE_POST,
  RESET_POST,
  EDIT_POST,
  DONE_TASK,
  FILTER_TASK,
]);

export const fetchTitles = createAction(testAction.FETCH_POST);
export const addTitles = createAction(testAction.ADD_POST);
export const removeTitles = createAction(testAction.REMOVE_POST);
export const editTitles = createAction(testAction.EDIT_POST);
export const resetTitles = createAction(testAction.RESET_POST);
export const doneTask = createAction(testAction.DONE_TASK);
export const filterTask = createAction(testAction.FILTER_TASK);
