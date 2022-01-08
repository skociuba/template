import React from 'react';
import {useNavigate} from 'react-router-dom';
import {shared} from 'sharedConstants';
import {media, useMedia} from 'components/Media';

import {} from './MainPage.style';
const MainPage = () => {
  const navigate = useNavigate();
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
  const handleSwitch = () => navigate({pathname: shared.routes.testPage.root});

  return (
    <>
      <div>MAIN PAGE</div>
      <button onClick={handleSwitch}>to next page</button>
      {deviceSize()}
    </>
  );
};

export default MainPage;
