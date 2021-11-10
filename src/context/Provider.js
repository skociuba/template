import React, {useReducer} from 'react';

import Context from './Context';
import Reducer from './Reducer';

const Provider = (props) => {
  const initialState = {
    synced: false,
    user: null,
    posts: [1, 2, 3, 4, 5],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
