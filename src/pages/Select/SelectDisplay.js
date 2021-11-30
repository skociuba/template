import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import '../../index.scss';
import {fetchSelectData} from './actions';
import {testDataSelector, selectDataSelector} from './selectors';
import 'react-loading-skeleton/dist/skeleton.css';
import SelectPassDataToParent from './SelectPassDataToParent/SelectPassDataToParent';
import SelectExample from './Select/Select';
import SelectWithRedux from './SelectWithRedux/SelectWithRedux';
import {contentContainer} from './SelectDisplay.style';
const SelectDisplay = () => {
  const [names, setNames] = useState('');
  const dispatch = useDispatch();
  const testData = useSelector((state) => testDataSelector(state));
  const selectDataFromRedux = useSelector((state) => selectDataSelector(state));

  useEffect(() => {
    dispatch(fetchSelectData());
  }, [dispatch]);

  const nameChange = (value) => {
    setNames(value);
  };

  return (
    <div>
      <div className={contentContainer}>
        <SelectPassDataToParent testData={testData} nameChange={nameChange} names={names} />
        <SelectExample />
        <SelectWithRedux />
      </div>
      <p>data from child component:{names}</p>
      <p>data from redux:{selectDataFromRedux}</p>
    </div>
  );
};

export default SelectDisplay;
