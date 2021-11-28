import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchSelectData} from '../actions';
import {testDataSelector} from '../selectors';

const SelectExample = () => {
  const dispatch = useDispatch();
  const [names, setNames] = useState(null);
  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchSelectData());
  }, [dispatch]);

  const handleNameChange = (e) => {
    setNames(testData[e.target.value]?.name);
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
      {names}
      <p> everything happening in child component</p>
    </div>
  );
};

export default SelectExample;
