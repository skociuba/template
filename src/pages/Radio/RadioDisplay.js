import React from 'react';
import {useSelector} from 'react-redux';
import '../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';

import RadioWithReduxState from './RadioWithReduxState/RadioWithReduxState';
import RadioWithLocalState from './RadioWithLocalState/RadioWithLocalState';
import {testBooleanSelector} from './selectors';
import {lightTheme, darkTheme, contentContainer} from './RadioDisplay.style';
const RadioDisplay = () => {
  const booleanFromRedux = useSelector((state) => testBooleanSelector(state));

  return (
    <div className={booleanFromRedux ? lightTheme : darkTheme}>
      <div className={contentContainer}>
        <RadioWithReduxState />
        <RadioWithLocalState />
      </div>
    </div>
  );
};

export default RadioDisplay;
