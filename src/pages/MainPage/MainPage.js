import React from 'react';
import {media, useMedia} from 'components/Media';
import {IS_STAFF} from 'config/constants';
import {getMapping, simpleMappersExample} from 'utils/mappingHelpers/index';
import ComponentWrapper from 'seba-container-wrapper';

const MainPage = () => {
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);

  console.log(getMapping('testData'));
  console.log(simpleMappersExample('B')?.title);

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
    <ComponentWrapper hasTopMargin={true} hasBottomMargin={true}>
      {IS_STAFF ? <div>MAIN PAGE for staff</div> : <div>MAIN PAGE for customer</div>}

      {deviceSize()}
    </ComponentWrapper>
  );
};

export default MainPage;
