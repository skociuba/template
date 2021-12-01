import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const INPUT_CHOSE = 'INPUT_CHOSE';
export const inputAction = actionNames([INPUT_CHOSE]);

export const fetchInputChose = createAction(inputAction.INPUT_CHOSE);
