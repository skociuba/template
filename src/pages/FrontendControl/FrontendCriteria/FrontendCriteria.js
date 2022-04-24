import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../../../index.scss';
import {shared} from 'sharedConstants';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';

const FrontendCriteria = ({filterOrderStatusData}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleNameChange = (filter, type) => {
    dispatch(filterOrderStatusData({type, value: filter}));
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
    </div>
  );
};

export default FrontendCriteria;
