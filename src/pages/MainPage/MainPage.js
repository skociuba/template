import React from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';
import {getMapping, simpleMappersExample} from 'utils/mappingHelpers/index';
import {roundNumber, currencyFormatter, positiveInteger} from 'utils/numbers/index';
import {getFormattedDate} from 'utils/dates/index';
import {QuoteIndicator} from 'components/Packages/QuoteIndicator/index';
import {ColorIndicator} from 'components/Packages/ColorIndicator/index';
import {LevelIndicator} from 'components/Packages/LevelIndicator/index';

//import ComponentWrapper from 'seba-container-wrapper';
import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

  console.log(getMapping('testData'));
  console.log(simpleMappersExample('B')?.title);
  console.log(positiveInteger(-222.5, 'intParam'));
  console.log(roundNumber(222.44444445));
  console.log(currencyFormatter(222333.3335));
  console.log(getFormattedDate('2022-06-15'));

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
      <QuoteIndicator value={-10} prefix={'GBP'} suffix={'suffix'} />
      <ColorIndicator data={1} />
      <ColorIndicator data={2} />
      <ColorIndicator data={3} />
      <LevelIndicator checked={3} length={5} />
    </div>
  );
};

export default MainPage;
