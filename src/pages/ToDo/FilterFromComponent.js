import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {testDataSelector} from './selectors';
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
  const example2 = useSelector((state) => testDataSelector(state));
  console.log(example2);

  const example = ['tottenham', 'arsenal', 'man utd', 'liverpool', 'chelsea', 'west ham'];

  const [data, setData] = useState(example);
  const [search, setSearch] = useState('');

  const reset = () => {
    setSearch('');
    setData(example);
  };

  return (
    <Fragment>
      <Container>
        <Input>
          <div className="form-group-collection">
            <input
              onChange={(e) => {
                const test = example?.filter((item) => {
                  return item.toLowerCase().includes(e.target.value.toLowerCase());
                });
                setData(test);
                setSearch(e.target.value);
              }}
              type="text"
              value={search}
            />
          </div>
          <StyledButton type="reset" defaultValue="Reset" onClick={reset}>
            Reset filter
          </StyledButton>
        </Input>
        <Info2>
          {' '}
          <h3>My tasks:</h3>
          {data?.length > 0 ? (
            <ul>
              {data.map((elem) => {
                return (
                  <h4 key={elem.id}>
                    <li>{elem}</li>
                  </h4>
                );
              })}
            </ul>
          ) : (
            <h4> No results </h4>
          )}
        </Info2>
      </Container>
    </Fragment>
  );
};
export default Filter;
