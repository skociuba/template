import React from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

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
