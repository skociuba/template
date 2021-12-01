import React from 'react';
import {useSelector} from 'react-redux';

import '../../index.scss';
import {inputDataSelector} from './selectors';
import InputWithRedux from './InputWithRedux/InputWithRedux';
import InputWithReduxWithoutSubmit from './InputWithReduxWithoutSubmit/InputWithRedux';
import {contentContainer} from './SelectDisplay.style';
const SelectDisplay = () => {
  const inputData = useSelector((state) => inputDataSelector(state));

  return (
    <div>
      <div className={contentContainer}>
        <InputWithRedux />
        <InputWithReduxWithoutSubmit />
        {inputData}
      </div>
    </div>
  );
};

export default SelectDisplay;
