import React from 'react';
import {useLocationState} from 'utils/hooks/useLocationState';
import {Link} from 'react-router-dom';

const data = {
  paramForUrl: 'testingParameterPassingViaUrl',
  additionalParamForUrl: 'dataAreComingFromBackend', //this is unique number only for one operation
  paramForComponent: 'testingData',
};

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const {updateLocationState} = useLocationState();

  const handleMouseDown1 = () => {
    updateLocationState({
      paramForUrl: data.paramForUrl,
      paramForComponent: data.paramForComponent,
    });
  };
  const handleMouseDown2 = () => {
    updateLocationState({
      paramForUrl: data.paramForUrl,
      paramForComponent: data.paramForComponent,
      additionalParamForUrl: data.additionalParamForUrl,
    });
  };

  return (
    <div className={contentContainer}>
      <Link to={`/test-page/${data.paramForUrl}`} onMouseDown={() => handleMouseDown1(data)}>
        updateLocationState
      </Link>
      <br />
      <Link
        to={`/test-page2/${data.paramForUrl}${data.additionalParamForUrl}`}
        onMouseDown={() => handleMouseDown2(data)}>
        updateLocationState
      </Link>
    </div>
  );
};

export default MainPage;
