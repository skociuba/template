import React from 'react';
import {useLocationState} from 'utils/hooks/useLocationState';
import {Link} from 'react-router-dom';

const data = {
  paramForUrl: 'testingParameterPassingViaUrl',
  paramForComponent: 'testingData',
};

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const {updateLocationState} = useLocationState();

  const handleMouseDown = () => {
    updateLocationState({
      paramForUrl: data.paramForUrl,
      paramForComponent: data.paramForComponent,
    });
  };

  return (
    <div className={contentContainer}>
      <Link to={`/test-page/${data.paramForUrl}`} onMouseDown={() => handleMouseDown(data)}>
        updateLocationState
      </Link>
    </div>
  );
};

export default MainPage;
