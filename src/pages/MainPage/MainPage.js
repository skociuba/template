import React, {useState, useEffect} from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';
import {getMapping, simpleMappersExample} from 'utils/mappingHelpers/index';
import {roundNumber, currencyFormatter, positiveInteger} from 'utils/numbers/index';
import {getFormattedDate} from 'utils/dates/index';
import {getLinkWithParameter} from 'utils/urls/index';
import {limitFractionalDigits} from 'utils/numbers/index';
import {shared} from 'sharedConstants';

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const [select, setSelect] = useState(shared.selectExample[0].value);
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

  console.log(getMapping('testData'));
  console.log(simpleMappersExample('B')?.title);
  console.log(positiveInteger(-222.5, 'intParam'));
  console.log(roundNumber(222.44444445));
  console.log(currencyFormatter(222333.3335));
  console.log(getFormattedDate('2022-06-15'));
  //example how to check and display right data from backend
  //  below data from backend
  const someData = [
    {
      transactionType: 'B',
      value: 2,
    },
  ];

  const getCorrectData = someData?.find(
    ({transactionType}) => shared.statuses[transactionType]?.title === 'BUY',
  );
  const displayCorrectData = getCorrectData ? getCorrectData?.value : '-';

  console.log(displayCorrectData);
  //////////////////////////////////////////////////////////////

  useEffect(() => {
    const {value} = select || {};

    switch (value) {
      case 'B':
        setSelect('B');
        break;
      case 'S':
        setSelect('S');
        break;
    }
  }, []);

  const handleChange = (e) => {
    setSelect(shared.selectExample[e.target.value].value);
  };

  console.log(select);

  ////////////////////////////////////////////////////////////////////////////////////////

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
      {IS_STAFF ? <div>MAIN PAGE for staff</div> : <div>MAIN PAGE for customer</div>}
      {deviceSize()}
      <p />
      <select onChange={handleChange}>
        {shared.selectExample?.map(({label}, i) => (
          <option value={i} key={i}>
            {label}
          </option>
        ))}
      </select>
      <p />

      <a href={getLinkWithParameter('index2.html')} target="_blank" rel="noreferrer">
        Link przesyłany z parametrem
      </a>
      <p />
      <input onKeyPress={(e) => limitFractionalDigits(e, 4)} />
    </div>
  );
};

export default MainPage;
