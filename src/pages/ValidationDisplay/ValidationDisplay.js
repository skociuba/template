import React, {useState} from 'react';

import {ErrorMessage} from '../../components/Modules/ErrorMessage/index';
import {convertData, validateData} from '../../components/Modules/validation/index';
import {contentContainer} from '../../pages/MainPage/MainPage.style';

import {exampleValidation} from './Example.validationSchema';
const ValidationDisplay = () => {
  const [errors, setErrors] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleValidation = (schema, data, key = null) => {
    const dataToValidate = key
      ? {
          dataToValidate: data,
          singleDataElementToCheck: {[key]: convertData(data, key)},
        }
      : data;
    const validatedData = validateData({schema, dataToValidate, errors});

    setErrors({...validatedData.errors});

    return validatedData.isValid;
  };

  const handleValue = ({target: {value}}) => {
    setInputValue(value < 0 ? value * -1 : value);
  };

  const handleCheck = () => {
    const value = inputValue || null;

    const isValid = handleValidation(
      exampleValidation({
        minimum: 1,
        maximum: 1000,
        value: value,
      }),
      {
        value: value,
      },
    );

    if (isValid) {
      console.log(value);
    } else {
      console.log(errors?.value?.message);
    }
  };

  return (
    <div className={contentContainer}>
      {ErrorMessage(errors?.value?.message)}
      <p>
        <input value={inputValue} onChange={handleValue} />
      </p>
      <button onClick={handleCheck}>check validation</button>
    </div>
  );
};

export default ValidationDisplay;
