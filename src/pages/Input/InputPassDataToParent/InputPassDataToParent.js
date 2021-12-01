import React from 'react';

import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';

const InputPassDataToParent = ({names, nameChange}) => {
  const handleAmount = ({target: {value}}) => {
    nameChange(value);
  };

  return (
    <div>
      <form>
        <input type="text" value={names} onChange={handleAmount} />
        <p>pas data from input</p>
      </form>
    </div>
  );
};

export default InputPassDataToParent;
