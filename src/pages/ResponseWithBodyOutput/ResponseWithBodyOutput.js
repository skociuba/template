import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {encodeQueryData} from 'utils/url';
import {useHistory, useParams} from 'react-router-dom';
import {shared} from 'routesConstants';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './ResponseWithBodyOutput.style';

const ResponseWithBodyOutput = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {test} = useParams();
  const params = encodeQueryData({
    test,
  });

  useEffect(() => {
    dispatch(fetchTestData(params));
  }, [dispatch]);

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const handleSwitch = () => history?.push({pathname: shared.routes.responseWithBody.root});

  const content = testLoadingExample ? (
    <Skeleton count={100} />
  ) : (
    <>
      <button onClick={handleSwitch}>to next page</button>
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
    </>
  );
  return <div className={contentContainer}>{content}</div>;
};

ResponseWithBodyOutput.propTypes = {
  fetchTestData: PropTypes.func,
};

export default ResponseWithBodyOutput;
