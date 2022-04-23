import {handleActions} from 'redux-actions';
import {shared} from 'sharedConstants';

import {
  fetchBackendData,
  fetchBackendSuccess,
  fetchBackendFail,
  filterOrderStatusData,
} from './actions';

export const initialFilter = {
  names: shared.names,
};

export const initialState = {
  backend: {
    data: [],
    loading: true,
    error: null,
  },
  filters: {
    ...initialFilter,
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
    [filterOrderStatusData](state, {payload}) {
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.type]: {
            ...initialState.filters[payload.type],
            [payload.value]: {
              ...state.filters[payload.type][payload.value],
              isSelected: true,
            },
          },
        },
      };
    },
  },
  initialState,
);
