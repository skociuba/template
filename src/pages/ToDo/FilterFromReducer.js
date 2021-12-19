import React, {useEffect, useRef, useState, Fragment} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import {testDataSelector} from './selectors';
import {fetchTitles, filterTask} from './actions';
const Item = styled.div`
  border: 2px solid white;
  padding: 10px 30px 10px;
  border-radius: 8px;
  background-color: #002f75;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-right: 0px;
  }
`;
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

  const reset = () => {
    setNewPost(example);
  };

  const postTitles =
    example?.length === 0
      ? ''
      : example?.length && example?.map((title) => <div key={title?.id}>{title?.payload}</div>);

  return (
    <Fragment>
      <p>Filtering in reducer:</p>
      <form onSubmit={handleSubmit}>
        <input ref={ref} onChange={handleChange} />

        <StyledButton type="submit">Filter</StyledButton>
      </form>
      <StyledButton type="reset" defaultValue="Reset" onClick={reset}>
        Reset filter
      </StyledButton>

      <Item>
        <h3>My tasks:</h3>
        <ul>{postTitles}</ul>
      </Item>
    </Fragment>
  );
};
export default Filter;
