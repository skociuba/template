import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import {shared} from '../../sharedConstants';

const Test = (fetchTestData, testData, testExample) => {
  useEffect(() => {
    fetchTestData();
  }, [fetchTestData]);

  const history = useHistory();

  const handleSwitch = () => history.push({pathname: shared.routes.mainPage.root});

  return (
    <div>
      {testExample}
      <br />
      <button onClick={handleSwitch}>go to main page</button>
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
