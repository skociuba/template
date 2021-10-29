import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button} from '@material/react-button';
import List, {ListItem} from 'components/List';

import {shared} from '../../sharedConstants';

import '../../index.scss';

const Test = ({testData, testLoading, fetchTestData}) => {
  const [switcher, setSwitcher] = useState(false);

  const handleListPositionChanger = () => {
    setSwitcher(!switcher);
  };

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
        isVertical={switcher}
        isBordered={true}
        isStriped={true}
        hasSeparators={true}
        dark={true}
        flexDirection={true}>
        {arr}
      </List>
      <Button onClick={handleListPositionChanger}>change List position</Button>
      <ListItem
        title={'title'}
        isVertical={false}
        hasVerticalPadding={true}
        hasFullWidth={true}
        noMarginBottom={true}
        hasTitleBorder={true}
        hasPaddingLeft={true}>
        {'hello'}
      </ListItem>
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
