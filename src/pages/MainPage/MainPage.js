import React from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';
import {getMapping} from 'utils/mappingHelpers/index';

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

  console.log(getMapping('testData'));

  const deviceSize = () => {
    if (isMobile) {
      return `MOBILE VERSION`;
    } else if (isTablet) {
      return 'TABLET VERSION';
    } else {
      return `DESKTOP VERSION`;
    }
  };

  return (
    <div className={contentContainer}>
      {IS_STAFF ? <div>MAIN PAGE for staff</div> : <div>MAIN PAGE for customer</div>}

      {deviceSize()}
    </div>
  );
};

export default MainPage;
