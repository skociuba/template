import React from 'react';
import {useDispatch} from 'react-redux';

import {doneTask} from './actions';

const Checkbox = (id) => {
  const dispatch = useDispatch();

  const handleBoolean = (e) => {
    dispatch(doneTask(id));
  };
  return (
    <input
      type="checkbox"
      onChange={() => {
        handleBoolean();
      }}
    />
  );
};

export default Checkbox;
