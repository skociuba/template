import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector} from '../selectors';

const FrontendCriteria = ({filterOrderStatusData}) => {
  const dispatch = useDispatch();
  const [names, setNames] = useState(null);
  const [airlines, setAirlines] = useState(null);
  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleNameChange = (type, filter) => {
    dispatch(filterOrderStatusData({type, value: filter}));
  };

  const handleChange = (e) => {
    setAirlines(testData[e.target.value]?.airline[0]?.name);
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setNames(testData[e.target.value]?.name);
          handleNameChange('name', names);
        }}>
        {testData?.map(({name}, i) => (
          <option value={i} key={i}>
            {name}
          </option>
        ))}
      </select>
      {names}
      <p>
        <select onChange={handleChange}>
          {testData?.map(({airline}) =>
            airline?.map(({name}, i) => (
              <option value={i} key={i}>
                {name}
              </option>
            )),
          )}
        </select>
        {airlines}
      </p>
    </div>
  );
};

export default FrontendCriteria;
