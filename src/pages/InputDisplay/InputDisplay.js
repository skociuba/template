import React from 'react';
import ComponentWrapper from 'seba-container-wrapper';

import CustomInput from './../../components/Packages/CustomInput/index';
import FieldWrapper from './../../components/Packages/FieldWrapper/index';

const MainPage = () => {
  return (
    <ComponentWrapper>
      <FieldWrapper
        labelText={'currency input'}
        errorText={'default error message'}
        error={true}
        tooltip={'default tooltip message'}>
        <CustomInput type="currency" />
      </FieldWrapper>
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
