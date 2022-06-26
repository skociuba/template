import React, {useState} from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';
import {getMapping, simpleMappersExample} from 'utils/mappingHelpers/index';
import {roundNumber, currencyFormatter, positiveInteger} from 'utils/numbers/index';
import {getFormattedDate} from 'utils/dates/index';

import {ErrorMessage} from '../../components/Modules/ErrorMessage/index';
import {convertData, validateData} from '../../components/Modules/validation/index';
import {exampleValidation} from '../MainPage/Example.validationSchema';

//import ComponentWrapper from 'seba-container-wrapper';
import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const [errors, setErrors] = useState({});
  const [inputValue, setInputValue] = useState('');

  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

  console.log(getMapping('testData'));
  console.log(simpleMappersExample('B')?.title);
  console.log(positiveInteger(-222.5, 'intParam'));
  console.log(roundNumber(222.44444445));
  console.log(currencyFormatter(222333.3335));
  console.log(getFormattedDate('2022-06-15'));

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

  const deviceSize = () => {
    if (isMobile) {
      return `MOBILE VERSION`;
    } else if (isTablet) {
      return 'TABLET VERSION';
    } else {
      return `DESKTOP VERSION`;
    }
  };
  //process.env.REACT_APP_CHANNEL_TYPE === 'staff' better way then IS_STAFF
  return (
    <div className={contentContainer}>
      {ErrorMessage(errors?.value?.message)}
      {IS_STAFF ? <div>MAIN PAGE for staff</div> : <div>MAIN PAGE for customer</div>}
      {deviceSize()}
      <p>
        <input value={inputValue} onChange={handleValue} />
      </p>
      <button onClick={handleCheck}>check validation</button>
    </div>
  );
};

export default MainPage;
