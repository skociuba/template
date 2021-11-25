import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import Checkbox from '@material/react-checkbox';
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
      <p>CHECKBOX WITH LOCAL STATE </p>
      <div>
        <form>
          <Checkbox
            nativeControlId="my-checkbox"
            checked={checked}
            onChange={() => {
              handleContent();
            }}
          />
          <label htmlFor="my-checkbox">My Checkbox</label>
        </form>
        {checked ? data : ''}
      </div>
    </div>
  );
};

export default CheckboxWithLocalState;
