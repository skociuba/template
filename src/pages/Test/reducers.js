import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail, fetchBooleanChose} from './actions';

export const initialState = {
  test: {
    data: null,
    loading: false,
    error: null,
  },

  boolean: true,
};
export default handleActions(
  {
    [fetchTestData](state) {
      return {
        ...state,
        test: {
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
        test: {
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
        test: {
          ...state.test,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
    [fetchBooleanChose](state, {payload}) {
      return {
        ...state,
        boolean: payload,
      };
    },
  },
  initialState,
);
