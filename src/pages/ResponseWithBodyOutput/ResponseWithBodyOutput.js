import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {encodeQueryData} from 'utils/url';
import {useHistory, useParams} from 'react-router-dom';
import {shared} from 'routesConstants';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchResponseData} from './actions';
import {responseDataSelector} from './selectors';
import {contentContainer} from './ResponseWithBodyOutput.style';

const ResponseWithBodyOutput = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {example} = useParams();
  const params = encodeQueryData({
    example,
  });
  console.log(params);
  useEffect(() => {
    dispatch(fetchResponseData(params));
  }, [dispatch]);

  const testData = useSelector((state) => responseDataSelector(state));

  const handleSwitch = () => history?.push({pathname: shared.routes.responseWithBody.root});

  const content = (
    <>
      <button onClick={handleSwitch}>to next page</button>
      <section data-testid="test-container">{testData?.length > 0 && testData}</section>
    </>
  );

  return <div className={contentContainer}>{content}</div>;
};

ResponseWithBodyOutput.propTypes = {
  fetchTestData: PropTypes.func,
};

export default ResponseWithBodyOutput;
