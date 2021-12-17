import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {testDataSelector} from './selectors';
import {fetchTitles, removeTitles, resetTitles} from './actions';
import ReduxInput from './AddToDo';
import ReduxEditor from './Editor';
import FilterFromReducer from './FilterFromReducer';
import FilterFromComponent from './FilterFromComponent';
import Checkbox from './Checkbox.js';
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

const Board = styled.div`
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  background-color: #002f75;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-right: 10px;
  }
`;
const Item = styled.div`
  border: 2px solid white;
  padding: 10px 10px 0 10px;
  border-radius: 8px;
  background-color: #002f75;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-right: 0px;
  }
`;

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  background: #833ab4;
  background: -webkit-linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  width: 95%;
`;

const Example = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitles());
  }, [dispatch]);

  const example = useSelector((state) => testDataSelector(state));

  const onDelete = (id) => {
    dispatch(removeTitles(id));
  };

  const onReset = () => {
    dispatch(resetTitles());
  };

  const postTitles =
    example?.length === 0
      ? ''
      : example?.length &&
        example?.map((title) => (
          <div key={title?.id}>
            <Item>
              {title?.payload} <Checkbox id={title?.id} />
              <p />
              <StyledButton onClick={() => onDelete(title?.id)}>X </StyledButton>
              <ReduxEditor post={title?.payload} id={title?.id} />
            </Item>
          </div>
        ));

  return (
    <Fragment>
      <Board>
        <Content>
          <StyledButton onClick={() => onReset()}>Reset </StyledButton>
          <ReduxInput />
          {postTitles}
        </Content>
        <Content>
          <FilterFromReducer />
        </Content>
        <Content>
          <FilterFromComponent />
        </Content>
      </Board>
    </Fragment>
  );
};

Example.propTypes = {
  example: PropTypes.array,
};

export default Example;
