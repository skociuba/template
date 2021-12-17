import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {testDataSelector} from './selectors';

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

      <Item>
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
      </Item>
    </Fragment>
  );
};
export default Filter;
