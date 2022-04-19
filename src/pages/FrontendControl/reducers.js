import {handleActions} from 'redux-actions';
import {shared} from 'sharedConstants';

import {fetchTestData, fetchTestSuccess, fetchTestFail, filterOrderStatusData} from './actions';

export const initialFilter = {
  names: shared.names,
};

export const initialState = {
  test: {
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
    [fetchTestData](state) {
      return {
        ...state,
        test: {
          ...state.test,
          data: [],
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
