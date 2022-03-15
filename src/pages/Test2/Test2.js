import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocationState} from 'utils/hooks/useLocationState';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {contentContainer} from './Test2.style';
const Test2 = () => {
  const dispatch = useDispatch();

  const {locationState} = useLocationState();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const {paramForUrl, paramForComponent, additionalParamForUrl} = locationState || '';

  console.log(locationState);

  return (
    <div className={contentContainer} data-testid="test-container">
      test2
      <br />
      {paramForUrl}
      <br />
      {paramForComponent}
      <br />
      {additionalParamForUrl}
    </div>
  );
};

export default Test2;
