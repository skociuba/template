import React, {useState} from 'react';
import ComponentWrapper from 'seba-container-wrapper';

import BackendResult from './BackendResult/BackendResult';
const BackendDisplayComponent = () => {
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);

  const recordPerPage = 10;

  const handleSideEffect = (startItem = 1) => {
    setStartSearchPageItem(startItem);
  };

  return (
    <div>
      <ComponentWrapper hasTopMargin={true}>
        <BackendResult
          handleSideEffect={handleSideEffect}
          recordPerPage={recordPerPage}
          startSearchPageItem={startSearchPageItem}
        />{' '}
      </ComponentWrapper>
    </div>
  );
};

export default BackendDisplayComponent;
