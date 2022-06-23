import {handleActions} from 'redux-actions';
import {shared} from 'sharedConstants';

import {
  fetchBackendData,
  fetchBackendSuccess,
  fetchBackendFail,
  toggleData,
  filterData,
  fetchTestData,
  fetchTestSuccess,
  fetchTestFail,
  resetData,
  sortData,
} from './actions';

export const initialState = {
  test: {
    data: {
      mappedDataOne: shared.backend.mappedDataOne,
      mappedDataTwo: shared.backend.mappedDataTwo,
      input: shared.backend.input,
      sort: shared.defaultSort,
    },
    loading: false,
    error: null,
  },
  backend: {
    data: [],
    loading: false,
    error: null,
  },
};

export default handleActions(
  {
    [fetchTestData](state) {
      return {
        ...state,
        test: {
          ...state.test,
          loading: true,
          error: null,
        },
      };
    },
    [fetchTestSuccess](state, {payload}) {
      return {
        ...state,
        test: {
          loading: false,
          ...state.test,
          data: {...state.test?.data, ...payload?.data},
          error: null,
        },
      };
    },
    [fetchTestFail](state, {payload}) {
      return {
        ...state,
        test: {
          ...state.test,
          loading: false,
          error: payload.message,
        },
      };
    },
    [fetchBackendData](state) {
      return {
        ...state,
        backend: {
          ...state.backend,
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
          loading: false,
          error: payload.message,
        },
      };
    },
    [sortData](state, {payload}) {
      return {
        ...state,
        test: {
          ...state.test,
          data: {
            ...state.test.data,
            sort: payload,
          },
        },
      };
    },
    [resetData](state) {
      return {
        ...state,
        test: initialState.test,
      };
    },
    [toggleData](state, {payload}) {
      return {
        ...state,
        test: {
          ...state.test,
          error: null,
          data: {
            ...state.test.data,
            [payload.type]: {
              ...state.test.data[payload.type],
              isActive: payload.value,
            },
          },
        },
      };
    },
    [filterData](state, {payload}) {
      const payloadValue = // add to custom multiselect
        typeof payload.value !== 'string' ? payload.value.map((item) => item.title) : payload.value;
      return {
        ...state,
        test: {
          ...state.test,
          error: null,
          data: {
            ...state.test.data,
            [payload.type]: {
              ...state?.test?.data[payload.type],
              ...(Object.getOwnPropertyDescriptor(state?.test?.data[payload.type], 'value')
                ? {value: payloadValue}
                : {
                    items: state?.test?.data[payload.type]?.items?.map((item, i) => {
                      return {
                        ...state?.test?.data[payload.type]?.items[i],
                        isSelected: Array.isArray(payloadValue)
                          ? payloadValue?.filter((nestedItem) => nestedItem === item.key).length > 0
                          : item.key === payloadValue,
                      };
                    }),
                  }),
            },
          },
        },
      };
    },
  },
  initialState,
);
