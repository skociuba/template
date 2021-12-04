/* eslint-disable no-unused-expressions */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {contentContainer} from './Test.style';
const Test = ({testData, fetchTestData, testLoading}) => {
  useEffect(() => {
    fetchTestData(), [fetchTestData];
  });

  const content = testLoading ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      {testData?.length > 0 &&
        testData?.map((user) => (
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
  return <div className={contentContainer}>{content}</div>;
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
