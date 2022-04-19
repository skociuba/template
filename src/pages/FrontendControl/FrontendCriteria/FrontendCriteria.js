import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector} from '../selectors';

const FrontendCriteria = ({filterOrderStatusData}) => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleNameChange = (type, filter) => {
    dispatch(filterOrderStatusData({type, value: filter}));
  };

  return (
    <div>
      <select
        onChange={(e) => {
          handleNameChange('_id', testData[e.target.value]?._id);
        }}>
        <option value={'all'}>all</option>
        {testData?.map(({_id}, i) => (
          <option value={i} key={i}>
            {_id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FrontendCriteria;
