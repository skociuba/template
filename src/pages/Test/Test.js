import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import {shared} from '../../routesConstants';

import {fetchTestData} from './actions';
import {testDataSelector, testExampleSelector, testLoadingSelector} from './selectors';
const Test = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));
  const testExample = useSelector((state) => testExampleSelector(state));
  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  console.log(testLoadingExample);

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const history = useHistory();

  const handleSwitch = () => history?.push({pathname: shared.routes.mainPage.root});

  return (
    <div>
      <div data-testid="header">{testExample}</div>
      <br />
      <button data-testid="button" onClick={handleSwitch}>
        go to main page
      </button>
      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            {user.name}--{user.trips}
            {user?.airline?.map((item) => (
              <p key={item.id}>
                {item.name}--{item.head_quaters}
                <br />
                <img src={item.logo} alt="Cats" width="70" height="60" />
              </p>
            ))}
          </div>
        ))}
    </div>
  );
};
Test.defaultProps = {
  fetchTestData: () => {},
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
