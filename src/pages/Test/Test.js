import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button} from '@material/react-button';
import List from 'components/List';

import {shared} from '../../sharedConstants';

import '../../index.scss';

const Test = ({testData, testLoading, fetchTestData}) => {
  useEffect(() => {
    fetchTestData();
  }, [fetchTestData]);
  console.log(fetchTestData());
  console.log(testData);
  console.log(testLoading);

  const history = useHistory();

  const handleSwitch = () => history.push({pathname: shared.routes.testPage.root});

  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <Button onClick={handleSwitch}>go to main page</Button>
      </div>
      <List
        isVertical={false}
        isBordered={true}
        isStriped={true}
        hasSeparators={false}
        dark={true}
        flexDirection={true}>
        {arr}
      </List>
    </>
  );
};
Test.defaultProps = {
  fetchTestData: () => {},
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
