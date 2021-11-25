import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail, fetchCheckboxChose} from './actions';

export const initialState = {
  checkbox: {
    data: null,
    loading: false,
    error: null,
  },

  boolean: false,
};
export default handleActions(
  {
    [fetchTestData](state) {
      return {
        ...state,
        checkbox: {
          ...state.test,
          data: null,
          loading: true,
          error: null,
        },
      };
    },
    [fetchTestSuccess](state, {payload}) {
      return {
        ...state,
        checkbox: {
          ...state.test,
          data: payload.data,
          loading: false,
          error: null,
        },
      };
    },
    [fetchTestFail](state, {payload}) {
      return {
        ...state,
        checkbox: {
          ...state.test,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
    [fetchCheckboxChose](state, {payload}) {
      return {
        ...state,
        boolean: payload,
      };
    },
  },
  initialState,
);
