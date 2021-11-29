import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import '../../index.scss';
import {fetchSelectData} from './actions';
import {testDataSelector} from './selectors';
import 'react-loading-skeleton/dist/skeleton.css';
import SelectPassDataToParent from './SelectPassDataToParent/SelectPassDataToParent';
import SelectExample from './Select/Select';
import {contentContainer} from './SelectDisplay.style';
const SelectDisplay = () => {
  const [names, setNames] = useState('');
  const dispatch = useDispatch();
  const testData = useSelector((state) => testDataSelector(state));

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
        <SelectExample namesFromSibling={`pass name to sibling:${names}`} />
      </div>
      {names}
    </div>
  );
};

export default SelectDisplay;
