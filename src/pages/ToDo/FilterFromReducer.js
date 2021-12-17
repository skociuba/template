import React, {useEffect, useRef, useState, Fragment} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import {testDataSelector} from './selectors';
import {fetchTitles, filterTask} from './actions';
const Input = styled.div`
  height: 200px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ff5601;
`;
const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;

  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.9);
`;
const StyledButton = styled.button`
  background-color: #ff5601;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #ff5601;
    color: white;
  }
`;
const Container = styled.div`
  border-top: 2px solid #ff5601;
  text-align: center;
  padding: 10px;
`;

const Filter = () => {
  const [newPost, setNewPost] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  let ref = useRef();
  useEffect(() => {
    ref.current?.focus();
  });
  const handleChange = (event) => {
    setNewPost(event.target.value);
  };
  const handleSubmit = (event, id) => {
    event.preventDefault();
    dispatch(filterTask({payload: newPost}));
    setNewPost('');
  };

  const example = useSelector((state) => testDataSelector(state));

  const reset = () => {};

  const postTitles =
    example?.length === 0
      ? ''
      : example?.length && example?.map((title) => <div key={title?.id}>{title?.payload}</div>);

  return (
    <Fragment>
      <Container>
        <Input>
          <form onSubmit={handleSubmit}>
            <input ref={ref} onChange={handleChange} />

            <StyledButton type="submit">Filter</StyledButton>
          </form>
          <StyledButton type="reset" defaultValue="Reset" onClick={reset}>
            Reset filter
          </StyledButton>
        </Input>
        <Info2>
          <h3>My tasks:</h3>
          <ul>{postTitles}</ul>
        </Info2>
      </Container>
    </Fragment>
  );
};
export default Filter;
