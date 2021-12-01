import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import '../../index.scss';
import {inputDataSelector} from './selectors';
import InputPassDataToParent from './InputPassDataToParent/InputPassDataToParent';
import InputWithRedux from './InputWithRedux/InputWithRedux';
import InputWithReduxWithoutSubmit from './InputWithReduxWithoutSubmit/InputWithReduxWthoutSubmit';
import {contentContainer} from './SelectDisplay.style';
const SelectDisplay = () => {
  const [names, setNames] = useState('');
  const inputData = useSelector((state) => inputDataSelector(state));
  const nameChange = (value) => {
    setNames(value);
  };
  return (
    <div>
      <div className={contentContainer}>
        <InputWithRedux />
        <InputWithReduxWithoutSubmit />
        <InputPassDataToParent nameChange={nameChange} names={names} />
        {inputData}

        {names}
      </div>
    </div>
  );
};

export default SelectDisplay;
