import React from 'react';
import {connect} from 'react-redux';
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
const ReduxInput = (props) => {
  const movieInput = React.createRef();

  const addMovie = (event) => {
    event.preventDefault();
    props.addTitles(movieInput.current.value);
    movieInput.current.value = '';
  };

  return (
    <form onSubmit={addMovie}>
      <input ref={movieInput} />
      <StyledButton type="submit">Add </StyledButton>
    </form>
  );
};
ReduxInput.propTypes = {
  addTitles: PropTypes.func.isRequired,
};

export default connect(null, {addTitles})(ReduxInput);
