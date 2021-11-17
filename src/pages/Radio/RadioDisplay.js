import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../../index.scss';
import Button from '@material/react-button';

import {shared} from '../../routesConstants';

import 'react-loading-skeleton/dist/skeleton.css';

import RadioWithReduxState from './RadioWithReduxState/RadioWithReduxState';
import RadioWithLocalState from './RadioWithLocalState/RadioWithLocalState';
import {testBooleanSelector} from './selectors';
import {lightTheme, darkTheme, contentContainer} from './RadioDisplay.style';
const RadioDisplay = () => {
  const history = useHistory();
  const booleanFromRedux = useSelector((state) => testBooleanSelector(state));

  const handleSwitch = () => history.push({pathname: shared.routes.mainPage.root});

  return (
    <div className={booleanFromRedux ? lightTheme : darkTheme}>
      <div className={contentContainer}>
        {' '}
        <Button onClick={handleSwitch}>go to main page</Button>
        <RadioWithReduxState />
        <RadioWithLocalState />
      </div>
    </div>
  );
};

export default RadioDisplay;
