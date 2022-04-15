import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ComponentWrapper from 'seba-container-wrapper';

import {filterOrderStatusData} from './actions';
import FrontendResult from './FrontendResult/FrontendResult';
import FrontendCriteria from './FrontendCriteria/FrontendCriteria';
const BackendDisplayComponent = ({
  fetchSearchForFundsResults,
  selectedCriteria,
  setSortCriteria,
}) => {
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);

  const dispatch = useDispatch();

  const recordPerPage = 2;

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      dispatch(
        fetchSearchForFundsResults({
          criteria: selectedCriteria,
          startItem: startSearchPageItem,
          endItem: endSearchPageItem,
          recordPerPage: recordPerPage,
        }),
      );
      // po kliknięciu funkcji  handleSideEffect startSearchPageItem i endSearchPageItem zmienia sie na niezerowe i w wyniku czego odpalana jest funkcja fetchSearchForFundsResults wraz z przesłaniem parametrów w body, ta sama funkcja przesłana do paginacji powoduje że wartości startItem, endItem przesyłają odpowiednie dane jako parametry

      //selectedCriteria tworzone jest w selectorze i zwraca wartość filtracji sortowania i range???

      //startItem, endItem i recordPerPage są potrzebne do paginacji a selectedCriteria do filtracji i sortowania
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
