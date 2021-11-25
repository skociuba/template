/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Checkbox from '@material/react-checkbox';
import Skeleton from 'react-loading-skeleton';

import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector, testLoadingSelector} from '../selectors';

const CheckboxWithLocalState = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const data = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            {user.name}--{user.trips}
            {user?.airline?.map((item) => (
              <p key={item.id}>
                {item.name}--{item.head_quaters}
              </p>
            ))}
          </div>
        ))}
    </section>
  );

  const handleContent = () => {
    if (checked) {
      setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };

  return (
    <div>
      <p>RADIO WITH LOCAL STATE </p>
      <div>
        <Checkbox
          checked={checked}
          onChange={() => {
            handleContent();
          }}
        />
        <label htmlFor="my-checkbox">My Checkbox</label>
      </div>
      {checked ? data : ''}
    </div>
  );
};

export default CheckboxWithLocalState;
