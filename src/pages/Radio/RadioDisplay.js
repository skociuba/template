import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../../index.scss';

import {shared} from '../../routesConstants';

import 'react-loading-skeleton/dist/skeleton.css';

import RadioWithReduxState from './RadioWithReduxState/RadioWithReduxState';
import RadioWithLocalState from './RadioWithLocalState/RadioWithLocalState';
import {testBooleanSelector} from './selectors';

const RadioDisplay = () => {
  const history = useHistory();
  const initBoolean = useSelector((state) => testBooleanSelector(state));
  const booleanFromState = initBoolean ? 'yes' : 'no';
  const handleSwitch = () => history.push({pathname: shared.routes.mainPage.root});

  return (
    <div>
      <button onClick={handleSwitch}>go to main page</button>
      <RadioWithReduxState />
      <RadioWithLocalState />
      {booleanFromState}
    </div>
  );
};

export default RadioDisplay;
