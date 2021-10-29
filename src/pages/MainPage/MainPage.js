import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@material/react-button';

import {shared} from '../../sharedConstants';
import {media, useMedia} from '../../components/Media';

import '../../index.scss';
import {} from './MainPage.style';
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
  const handleSwitch = () => history.push({pathname: shared.routes.newPage.root});

  return (
    <>
      <div>MAIN PAGE</div>
      <Button onClick={handleSwitch}>to next page</Button>
      {deviceSize()}
    </>
  );
};

export default MainPage;
