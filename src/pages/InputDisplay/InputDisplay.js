import React from 'react';
import ComponentWrapper from 'seba-container-wrapper';

import CustomInput from './../../components/Packages/CustomInput/index';

const MainPage = () => {
  return (
    <ComponentWrapper>
      {' '}
      <p>
        currency input
        <CustomInput type="currency" />
      </p>
      <p>
        phone input
        <CustomInput type="phone" focused={true} />
      </p>
      <p>
        prefix input
        <CustomInput prefix={<span>GBP</span>} suffix={<span>suffix</span>} error={true} />
      </p>
    </ComponentWrapper>
  );
};

export default MainPage;
