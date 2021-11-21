import {handleActions} from 'redux-actions';

import {fetchResponseData, fetchResponseSuccess, fetchResponseFail} from './actions';

export const initialState = {
  request: {
    data: null,
    loading: false,
    error: null,
  },
};
export default handleActions(
  {
    [fetchResponseData](state) {
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
    [fetchResponseSuccess](state, {payload}) {
      return {
        ...state,
        request: {
          ...state.request,
          data: payload,
          loading: false,
          error: null,
        },
      };
    },
    [fetchResponseFail](state, {payload}) {
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
