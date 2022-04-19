import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';
import {shared} from 'sharedConstants';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector} from '../selectors';

const FrontendCriteria = ({filterOrderStatusData}) => {
  const dispatch = useDispatch();
  const [airlines, setAirlines] = useState(null);
  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleNameChange = (filter, type) => {
    dispatch(filterOrderStatusData({type, value: filter}));
  };

  const handleChange = (e) => {
    setAirlines(testData[e.target.value]?.airline[0]?.name);
  };

  return (
    <div>
      <select
        onChange={(e) => {
          handleNameChange(shared?.names[e.target.value]?.title, 'names');
        }}>
        {Object.keys(shared.names)?.map((name) => (
          <option value={name} key={name} selected={name === 'all' ? 'selected' : ''}>
            {shared?.names[name]?.title}
          </option>
        ))}
      </select>

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
