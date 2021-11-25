import React from 'react';
import {useSelector} from 'react-redux';
import '../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';

import CheckboxWithReduxState from './CheckboxWithReduxState/CheckboxWithReduxState';
import CheckboxWithLocalState from './CheckboxWithLocalState/CheckboxWithLocalState';
import {testBooleanSelector} from './selectors';
import {lightTheme, darkTheme, contentContainer} from './CheckboxDisplay.style';
const CheckboxDisplay = () => {
  const booleanFromRedux = useSelector((state) => testBooleanSelector(state));

  return (
    <div className={booleanFromRedux ? darkTheme : lightTheme}>
      <div className={contentContainer}>
        <CheckboxWithReduxState />
        <CheckboxWithLocalState />
      </div>
    </div>
  );
};

export default CheckboxDisplay;
