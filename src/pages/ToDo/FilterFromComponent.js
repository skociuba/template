import React, {useState, Fragment, useEffect} from 'react';
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
  const titles = useSelector((state) => testDataSelector(state));

  const [filteredUsers, setUsers] = useState(
    useEffect(() => {
      setUsers(titles);
    }, [titles]),
  );

  function getFilteredUsersForText(text) {
    return titles.filter((user) => user.payload.toLowerCase().includes(text.toLowerCase()));
  }

  const filterUsers = (e) => {
    const text = e.currentTarget.value;
    const score = getFilteredUsersForText(text);
    setUsers(score);
  };
  const reset = (e) => {
    e.persist();
    setUsers(titles); // using e.persist instead e.preventDefault and  type='reset' defaultValue='Reset' to reset input and filter
  };
  return (
    <Fragment>
      <p>Filtering in component:</p>
      <form>
        <div className="form-group-collection">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" />
            <input type="text" name="payload" onInput={filterUsers} className="form-control" />
          </div>
          <StyledButton type="reset" defaultValue="Reset" onClick={reset}>
            Reset filter
          </StyledButton>
        </div>
      </form>
      <Item>
        <h3>My tasks:</h3>
        {filteredUsers?.length > 0 ? (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.payload}</li>
            ))}
          </ul>
        ) : (
          <h4> No results </h4>
        )}
      </Item>
    </Fragment>
  );
};
export default Filter;
