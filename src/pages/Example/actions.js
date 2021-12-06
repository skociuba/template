import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';

export const testAction = actionNames([FETCH_POST, ADD_POST, REMOVE_POST, EDIT_POST]);

export const fetchTitles = createAction(testAction.FETCH_POST);
export const addTitles = createAction(testAction.ADD_POST);
export const removeTitles = createAction(testAction.REMOVE_POST);
export const editTitles = createAction(testAction.EDIT_POST);
