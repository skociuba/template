import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail, filterOrderStatusData} from './actions';

export const initialFilter = [];

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
        filters: {
          _id: payload.data.data.map((item) => ({
            title: item._id,
            isSelected: false,
          })),
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
      console.log(payload);
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.type]: {
            value: payload.value,
            isSelected: true,
          },
        },
      };
    },
  },
  initialState,
);
