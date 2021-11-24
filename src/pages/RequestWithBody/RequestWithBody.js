import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './RequestWithBody.style';

const ResponseWithBody = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state) => testDataSelector(state));
  const nameOne = testData?.length > 0 && testData[1].name;
  const nameTwo = testData?.length > 0 && testData[2].name;
  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const content = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <section data-testid="test-container">
      <Link to={`request-with-body-output/${nameOne}/${nameTwo}`}>
        <button>to next page</button>
      </Link>
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
  return <div className={contentContainer}>{content}</div>;
};

ResponseWithBody.propTypes = {
  fetchTestData: PropTypes.func,
};

export default ResponseWithBody;
