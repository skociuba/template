import React, {Suspense, useLayoutEffect} from 'react';
//import {useNavigate, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {Routing} from '../../routes.config';

import {appCheckConfig} from './actions';
import {applicationWrapper} from './Application.style';

const Application = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();
  const config = useSelector((state) => state.application.config);

  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      dispatch(appCheckConfig());
    }
  });
  return (
    <div className={applicationWrapper} data-testid="applicationContainer">
      <Suspense fallback={<div />}>
        <Routing />
      </Suspense>
    </div>
  );
};

Application.defaultProps = {
  appCheckConfig: () => {},
  config: {},
};

export default Application;
