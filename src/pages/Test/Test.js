import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import {shared} from '../../sharedConstants';
const Test = ({testData, testLoading, fetchTestData}) => {
  useEffect(() => {
    fetchTestData();
  }, [fetchTestData]);
  console.log(fetchTestData());
  console.log(testData);
  console.log(testLoading);

  const history = useHistory();

  const handleSwitch = () => history.push({pathname: shared.routes.testPage.root});

  return (
    <div>
      <button onClick={handleSwitch}>go to main page</button>
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
