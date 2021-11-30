import {handleActions} from 'redux-actions';

import {fetchSelectData, fetchSelectSuccess, fetchSelectFail, fetchSelectChose} from './actions';

export const initialState = {
  select: {
    data: null,
    loading: false,
    error: null,
  },
  dataFromSelect: [],
};
export default handleActions(
  {
    [fetchSelectData](state) {
      return {
        ...state,
        select: {
          ...state.select,
          data: null,
          loading: true,
          error: null,
        },
      };
    },
    [fetchSelectSuccess](state, {payload}) {
      return {
        ...state,
        select: {
          ...state.select,
          data: payload.data,
          loading: false,
          error: null,
        },
      };
    },
    [fetchSelectFail](state, {payload}) {
      return {
        ...state,
        select: {
          ...state.select,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
    [fetchSelectChose](state, {payload}) {
      return {
        ...state,
        dataFromSelect: payload,
      };
    },
  },
  initialState,
);
