import React, {useState, useEffect} from 'react';
import ComponentWrapper from 'seba-container-wrapper';

import {filterOrderStatusData} from './actions';
import FrontendResult from './FrontendResult/FrontendResult';
import FrontendCriteria from './FrontendCriteria/FrontendCriteria';
const BackendDisplayComponent = ({setSortCriteria}) => {
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);

  const recordPerPage = 2;

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      setStartSearchPageItem(0);
      setEndSearchPageItem(0);
    }
  }, [startSearchPageItem, endSearchPageItem]);

  const handleSideEffect = (startItem = 1, endItem = 5) => {
    setStartSearchPageItem(startItem);
    setEndSearchPageItem(endItem);
  };
  console.log(startSearchPageItem);

  return (
    <div>
      <ComponentWrapper hasTopMargin={true}>
        <FrontendCriteria filterOrderStatusData={filterOrderStatusData} />
      </ComponentWrapper>
      <FrontendResult
        handleSideEffect={handleSideEffect}
        recordPerPage={recordPerPage}
        setSortCriteria={setSortCriteria}
      />
    </div>
  );
};

export default BackendDisplayComponent;
