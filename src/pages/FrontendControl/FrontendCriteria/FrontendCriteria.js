import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector} from '../selectors';

const FrontendCriteria = ({filterOrderStatusData}) => {
  const dispatch = useDispatch();
  const [Id, setId] = useState(null);
  const testData = useSelector((state) => testDataSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleNameChange = (type, filter) => {
    console.log(dispatch(filterOrderStatusData({type, value: filter})));
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setId(testData[e.target.value]?._id);
          handleNameChange('id', Id);
        }}>
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
