import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocationState} from 'utils/hooks/useLocationState';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {contentContainer} from './Test.style';
const Test = () => {
  const dispatch = useDispatch();

  const {locationState} = useLocationState();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const {paramForUrl, paramForComponent} = locationState || '';

  return (
    <div className={contentContainer} data-testid="test-container">
      {paramForUrl}
      <br />
      {paramForComponent}
      <br />
    </div>
  );
};

export default Test;
