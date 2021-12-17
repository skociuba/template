import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {addTitles} from './actions';
const StyledButton = styled.button`
  background-color: #226de6;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: #00b38f;
    color: white;
  }
`;
const ReduxInput = () => {
  const dispatch = useDispatch();
  const movieInput = React.createRef();

  const addItem = (event) => {
    event.preventDefault();
    dispatch(addTitles(movieInput.current.value));
    movieInput.current.value = '';
  };

  return (
    <form onSubmit={addItem}>
      <input ref={movieInput} />
      <StyledButton type="submit">Add </StyledButton>
    </form>
  );
};
ReduxInput.propTypes = {
  addTitles: PropTypes.func,
};

export default ReduxInput;
