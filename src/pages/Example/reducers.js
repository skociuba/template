import {handleActions} from 'redux-actions';

import {fetchTitles, addTitles, removeTitles, editTitles} from './actions';

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
      const newState = state.example.filter((i) => i !== payload);
      return {
        ...state,
        example: newState,
      };
    },
    [editTitles](state, {payload}) {
      const newState = state.example.map((todo) => {
        if (console.log(todo) === payload) {
          return {...state, example: newState};
        }
        return todo;
      });
      return newState;
    },
  },
  initialState,
);
