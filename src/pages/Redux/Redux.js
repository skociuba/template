import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {shared} from 'sharedConstants';

import {fetchReduxData} from './actions';
import Display from './Display';

const Redux = () => {
  const history = useHistory();
  const handleSwitch = () => history.push({pathname: shared.routes.testPage.root});

  const dispatch = useDispatch();
  const users = useSelector((state) => state?.test2?.test2?.users);

  const loading = useSelector((state) => state?.test2?.test2?.loading);
  const error = useSelector((state) => state?.test2?.test2?.error);

  useEffect(() => {
    dispatch(fetchReduxData());
  }, [dispatch]);

  const handleFetchData = () => {
    fetchReduxData();
  };

  return (
    <>
      <button onClick={handleFetchData}>fetch</button>
      <button onClick={handleSwitch}>to main page</button>
      {users?.loading && <p>Loading...</p>}
      {users?.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users?.length > 0 && users.map((user) => <Display key={user.id} user={user} />)}
    </>
  );
};

export default Redux;
