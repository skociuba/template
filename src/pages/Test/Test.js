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

  const {market, productAlternativeClassificationCode, productAlternativeNumber, productTypeCode} =
    locationState || '';

  return (
    <div className={contentContainer}>
      {market}
      <br />
      {productAlternativeClassificationCode}
      <br />
      {}
      <br />
      {productAlternativeNumber}
      <br />
      {productTypeCode}
    </div>
  );
};

export default Test;
