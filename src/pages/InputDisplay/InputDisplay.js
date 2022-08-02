import React from 'react';
import ComponentWrapper from 'seba-container-wrapper';

import CustomInput from './../../components/Packages/CustomInput/index';
import FieldWrapper from './../../components/Packages/FieldWrapper/index';
import {Select} from './../../components/Packages/Select/index';

const MainPage = () => {
  const mockData = [
    {value: 'y', label: 'yes'},
    {value: 'n', label: 'no'},
    {value: 'N/A', label: 'N/A'},
  ];

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

      <Select
        label="example select"
        options={mockData}
        defaultValue={mockData?.[0]}
        isMulti={true}
        showLabel={true}
      />
    </ComponentWrapper>
  );
};

export default MainPage;
