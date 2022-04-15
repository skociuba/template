import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail, filterOrderStatusData} from './actions';

export const initialState = {
  test: {
    data: null,
    loading: false,
    error: null,
  },
  filters: {
    ...initialFilter,
  },
};
export const initialFilter = {
  names: 'names',
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
    [filterOrderStatusData](state, {payload}) {
      console.log(payload);
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.type]: {
            ...initialState.filters[payload.type],
            [payload.value]: {
              ...state.filters[payload.value],
            },
          },
        },
      };
    },
  },
  initialState,
);
