import React, {useEffect, useState} from 'react';
import {media, useMedia} from 'components/Media';
import {useLocation} from 'react-router-dom';

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const [param, setParam] = useState('');
  const isMobile = useMedia(media.device.mobile);
  const isTablet = useMedia(media.device.tablet);
  const location = useLocation();

  useEffect(() => {
    const searchQueryParam = new URLSearchParams(location.search).get('q');
    if (searchQueryParam) {
      setParam(searchQueryParam);
    }
  }, [location]);

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
      <div>MAIN PAGE</div>

      {deviceSize()}

      <p> {param}</p>
    </div>
  );
};

export default MainPage;
