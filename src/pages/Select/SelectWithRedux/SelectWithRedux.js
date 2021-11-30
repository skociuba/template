import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchSelectData, fetchSelectChose} from '../actions';
import {testDataSelector} from '../selectors';

const SelectWithRedux = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchSelectData());
  }, [dispatch]);

  const handleNameChange = (e) => {
    dispatch(fetchSelectChose(testData[e.target.value]?.name));
  };

  return (
    <div>
      <select onChange={handleNameChange}>
        {testData?.map(({name}, i) => (
          <option value={i} key={i}>
            {name}
          </option>
        ))}
      </select>

      <p>select with redux</p>
    </div>
  );
};

export default SelectWithRedux;
