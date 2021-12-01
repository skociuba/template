import {handleActions} from 'redux-actions';

import {fetchInputChose} from './actions';

export const initialState = {
  dataFromInput: [],
};

// const addTodo = (state, newTodo) => {
//   const {name} = newTodo;
//   const todo = name;
//   const newState = {...state, todo};
//   return newState;
// };
export default handleActions(
  {
    [fetchInputChose](state, {payload}) {
      return {
        ...state,
        dataFromInput: payload,
        // dataFromInput: addTodo(state, payload),
      };
    },
  },
  initialState,
);
