import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {ErrorMessage} from '../../components/Modules/ErrorMessage/index';
import {ErrorNotification} from '../../components/Packages/ErrorNotification/index';
import {FallbackIndicator} from '../../components/Packages/FallbackIndicator/index';

import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector, errorSelector} from './selectors';
import {contentContainer} from './Test.style';
const Test = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));
  const errorCode = useSelector((state) => errorSelector(state));

  const example = null;

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const error = {errors: [{reasonCode: '401'}, {reasonCode: '400'}]};

  const componentContent = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      {ErrorMessage(errorCode)}
      <ErrorNotification errors={error} />
      <FallbackIndicator>{example}</FallbackIndicator>
      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            <FallbackIndicator>{user.name}</FallbackIndicator>
            <FallbackIndicator>{user.trips}</FallbackIndicator>
            {user?.airline?.map((item) => (
              <p key={item.id}>
                <FallbackIndicator>{item.name}</FallbackIndicator>
                <FallbackIndicator>{item.head_quaters}</FallbackIndicator>
              </p>
            ))}
          </div>
        ))}
    </section>
  );
  return <div className={contentContainer}>{componentContent}</div>;
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
