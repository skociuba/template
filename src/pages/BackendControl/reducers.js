import {handleActions} from 'redux-actions';

import {fetchBackendData, fetchBackendSuccess, fetchBackendFail} from './actions';

export const initialState = {
  backend: {
    data: [],
    loading: true,
    error: null,
  },
};

export default handleActions(
  {
    [fetchBackendData](state) {
      return {
        ...state,
        backend: {
          ...state.backend,
          data: [],
          loading: true,
          error: null,
        },
      };
    },
    [fetchBackendSuccess](state, {payload}) {
      return {
        ...state,
        backend: {
          ...state.backend,
          data: payload.data,
          loading: false,
          error: null,
        },
      };
    },
    [fetchBackendFail](state, {payload}) {
      return {
        ...state,
        backend: {
          ...state.backend,
          data: [],
          loading: false,
          error: payload.message,
        },
      };
    },
  },
  initialState,
);
