import {handleActions} from 'redux-actions';
import {v4} from 'uuid';

import {
  fetchTitles,
  addTitles,
  removeTitles,
  editTitles,
  resetTitles,
  doneTask,
  filterTask,
} from './actions';

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

    [resetTitles]() {
      return initialState;
    },

    [addTitles](state, {payload}) {
      const id = v4();
      return {
        ...state,

        example: [...state.example, {payload, id, done: false}],
      };
    },
    [removeTitles](state, {payload}) {
      const newState = state?.example.filter((item) => item.id !== payload);
      return {
        ...state,
        example: newState,
      };
    },

    [doneTask](state, {payload}) {
      const done = state?.example.map((item) =>
        item.id === payload.id ? {...item, done: !item.done, id: item.id} : item,
      );
      return {
        ...state,
        example: done,
      };
    },

    [editTitles](state, {payload}) {
      const newState = state.example.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
      return {
        ...state,
        example: newState,
      };
    },
    [filterTask](state, {payload}) {
      const newState = state?.example.filter((item) => item.payload === payload.payload);
      return {
        ...state,
        example: newState,
      };
    },
  },
  initialState,
);
