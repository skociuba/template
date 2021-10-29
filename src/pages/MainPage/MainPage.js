import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@material/react-button';

import {media, useMedia} from '../../components/Media/index';
import {shared} from '../../sharedConstants';

import '../../index.scss';
import {} from './MainPage.style';

const MainPage = () => {
  const history = useHistory();
  const isMobile = useMedia(media.device.mobile);

  const handleSwitch = () => history.push({pathname: shared.routes.newPage.root});

  return (
    <>
      <div>MAIN PAGE</div>
      <Button onClick={handleSwitch}>to next page</Button>
      {isMobile ? `wersja mobilna` : ``}
    </>
  );
};

export default MainPage;
