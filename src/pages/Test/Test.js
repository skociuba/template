import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {ErrorMessage} from '../../components/ErrorMessage/index';
import {FallbackIndicator} from '../../components/FallbackIndicator/index';

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

  const componentContent = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      {ErrorMessage(errorCode)}
      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            <FallbackIndicator>{user.name}</FallbackIndicator>--
            <FallbackIndicator>{user.trips}</FallbackIndicator>
            {user?.airline?.map((item) => (
              <p key={item.id}>
                <FallbackIndicator>{item.name}</FallbackIndicator>--
                <FallbackIndicator>{item.head_quaters}</FallbackIndicator>
                <FallbackIndicator>{example}</FallbackIndicator>
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
