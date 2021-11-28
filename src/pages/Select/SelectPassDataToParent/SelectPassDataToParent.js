import React from 'react';

import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';

const SelectPassDataToParent = ({testData, nameChange, names}) => {
  const handleNameChange = ({value}) => {
    console.log(nameChange(testData[value]));
  };
  const createSelectAccountOption = (option) => {
    if (!option) {
      return null;
    }
    const {name, id} = option;

    const label = `${name}`;
    return {
      children: label,
      label,
      value: id,
      isDisabled: false,
    };
  };
  console.log(names);
  return (
    <div>
      <select value={createSelectAccountOption(names)} onChange={handleNameChange}>
        {testData?.map(({name}, i) => (
          <option value={i} key={i}>
            {name}
          </option>
        ))}
      </select>
      {names}
      <p>pass data to parent component</p>
    </div>
  );
};

export default SelectPassDataToParent;
