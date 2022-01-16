import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {encodeQueryData} from 'utils/url';
import {useNavigate, useParams} from 'react-router-dom';
import {shared} from 'sharedConstants';
import Button from '@material/react-button';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchResponseData} from './actions';
import {responseDataSelector} from './selectors';
import {contentContainer} from './RequestWithBodyOutput.style';

const ResponseWithBodyOutput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {nameOne, nameTwo} = useParams();

  const params = encodeQueryData({
    nameOne,
    nameTwo,
  });

  //  const params = {
  //     nameOne, // when we got complicated structure
  //     nameTwo,
  //   };

  useEffect(() => {
    dispatch(fetchResponseData(params));
  }, [dispatch]);

  const names = useSelector((state) => responseDataSelector(state));

  const handleSwitch = () => navigate({pathname: shared.routes.requestWithBody.root});

  const content = (
    <>
      <Button onClick={handleSwitch}>back to request</Button>
      <section data-testid="test-container">
        {names?.nameOne?.length > 0 && names?.nameOne}
        <p />
        {names?.nameTwo?.length > 0 && names?.nameTwo}
      </section>
    </>
  );

  return <div className={contentContainer}>{content}</div>;
};

ResponseWithBodyOutput.propTypes = {
  fetchTestData: PropTypes.func,
};

export default ResponseWithBodyOutput;
