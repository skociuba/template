import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchInputChose} from '../actions';

const InputWithRedux = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchInputChose({name}));
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={handleNameChange} />

      <button type="submit">Add </button>
    </form>
  );
};

export default InputWithRedux;
