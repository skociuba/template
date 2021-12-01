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
        <input type="text" onChange={handleNameChange} />
        <p> pass data from input to redux</p>
      </label>
    </form>
  );
};

export default InputWithReduxWithoutSubmit;
