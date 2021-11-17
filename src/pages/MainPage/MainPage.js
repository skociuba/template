import React from 'react';
import {useHistory} from 'react-router-dom';
import {shared} from 'routesConstants';
import {media, useMedia} from 'components/Media';
import Button from '@material/react-button';

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const history = useHistory();
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
  const handleSwitch = () => history?.push({pathname: shared.routes.radioPage.root});

  return (
    <div className={contentContainer}>
      <div>MAIN PAGE</div>
      <Button onClick={handleSwitch}>Radio</Button>
      {deviceSize()}
    </div>
  );
};

export default MainPage;
