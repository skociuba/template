import {handleActions} from 'redux-actions';

import {fetchReduxData, fetchReduxSuccess, fetchReduxFail} from './Actions';

export const initialState = {
  test2: {
    users: [],
    loading: false,
    error: null,
  },
};
export default handleActions(
  {
    [fetchReduxData](state) {
      return {
        ...state,
        test2: {
          ...state.test2,
          loading: true,
        },
      };
    },
    [fetchReduxSuccess](state, {users}) {
      return {
        ...state,
        test2: {
          ...state.test2,
          users: users,
          loading: false,
          error: null,
        },
      };
    },
    [fetchReduxFail](state, {payload}) {
      return {
        ...state,
        test2: {
          ...state.test2,
          users: null,
          loading: false,
          error: payload,
        },
      };
    },
  },
  initialState,
);
