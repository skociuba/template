import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail} from './actions';

export const initialState = {
  request: {
    data: null,
    loading: false,
    error: null,
  },
};
export default handleActions(
  {
    [fetchTestData](state) {
      return {
        ...state,
        request: {
          ...state.request,
          data: null,
          loading: true,
          error: null,
        },
      };
    },
    [fetchTestSuccess](state, {payload}) {
      return {
        ...state,
        request: {
          ...state.request,
          data: console.log(payload),
          loading: false,
          error: null,
        },
      };
    },
    [fetchTestFail](state, {payload}) {
      return {
        ...state,
        request: {
          ...state.request,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
  },
  initialState,
);
