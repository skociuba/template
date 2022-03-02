import React from 'react';
import {useLocationState} from 'utils/hooks/useLocationState';
import {Link} from 'react-router-dom';

const data = {
  market: 'Pl',
  productAlternativeClassificationCode: 'Q',
  productAlternativeNumber: '10',
  productTypeCode: 'example',
};

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const {updateLocationState} = useLocationState();

  const handleMouseDown = () => {
    updateLocationState({
      market: data.market,
      productAlternativeClassificationCode: data.productAlternativeClassificationCode,
      productAlternativeNumber: data.productAlternativeNumber,
      productTypeCode: data.productTypeCode,
    });
  };

  return (
    <div className={contentContainer}>
      <Link
        to={`/test-page/${data.productAlternativeNumber}`}
        onMouseDown={() => handleMouseDown(data)}>
        updateLocationState
      </Link>
    </div>
  );
};

export default MainPage;
