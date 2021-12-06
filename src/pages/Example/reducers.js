import {handleActions} from 'redux-actions';

import {fetchTitles, addTitles, removeTitles} from './actions';

export const initialState = {
  example: [],
};
export default handleActions(
  {
    [fetchTitles](state) {
      return {
        ...state,
        example: state.example,
      };
    },
    [addTitles](state, {payload}) {
      return {
        ...state,

        example: [...state.example, payload],
      };
    },
    [removeTitles](state, {payload}) {
      const newState = state.example.filter((item, i) => i !== payload);
      return {
        ...state,
        example: newState,
      };
    },
  },
  initialState,
);
