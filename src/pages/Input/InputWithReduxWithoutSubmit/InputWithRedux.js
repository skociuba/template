import React from 'react';
import {useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchInputChose} from '../actions';

const InputWithReduxWithoutSubmit = () => {
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(fetchInputChose({name: e.target.value}));
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" onChange={handleNameChange} />
      </label>
    </form>
  );
};

export default InputWithReduxWithoutSubmit;
