import React, {useState, useEffect} from 'react';
import ComponentWrapper from 'seba-container-wrapper';
//import {useDispatch} from 'react-redux';

//import {filterOrderStatusData} from './actions';
import BackendResult from './BackendResult/BackendResult';
//import BackendCriteria from './BackendCriteria/BackendCriteria';
const BackendDisplayComponent = ({
  fetchSearchForFundsResults,
  fetchSearchForFundsCriteria,

  toggleCriteriaFieldStatus,
  selectedCriteria,
  setSortCriteria,
  criteriaData,
}) => {
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);

  const recordPerPage = 10;

  // useEffect(() => {
  //   dispatch(fetchSearchForFundsCriteria());
  // }, [fetchSearchForFundsCriteria]);

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      // dispatch(
      //   fetchSearchForFundsResults({
      //     criteria: selectedCriteria,
      //     startItem: startSearchPageItem,
      //     endItem: endSearchPageItem,
      //     recordPerPage: recordPerPage,
      //   }),
      // );
      // po kliknięciu funkcji  handleSideEffect startSearchPageItem i endSearchPageItem zmienia sie na niezerowe i w wyniku czego odpalana jest funkcja fetchSearchForFundsResults wraz z przesłaniem parametrów w body, ta sama funkcja przesłana do paginacji powoduje że wartości startItem, endItem przesyłają odpowiednie dane jako parametry
      //selectedCriteria tworzone jest w selectorze i zwraca wartość filtracji sortowania i range???
      //startItem, endItem i recordPerPage są potrzebne do paginacji a selectedCriteria do filtracji i sortowania
    }
  }, [startSearchPageItem, endSearchPageItem]);

  const handleSideEffect = (startItem = 1, endItem = 10) => {
    setStartSearchPageItem(startItem);
    setEndSearchPageItem(endItem);
  };

  return (
    <div>
      <ComponentWrapper hasTopMargin={true}>
        {/* <BackendCriteria
          handleSideEffect={handleSideEffect} // to samo co handleSearchResult
          filterOrderStatusData={filterOrderStatusData} //funkcja updatuje stan w reducerze zamiast setSearchForFundCriteria
          toggleCriteriaFieldStatus={toggleCriteriaFieldStatus} //funkcja updatuje stan w reducerze
          criteriaData={criteriaData} //dane ze stanu w moim przypadku z selectora useSelect
        /> */}
        <BackendResult
          handleSideEffect={handleSideEffect}
          recordPerPage={recordPerPage}
          setSortCriteria={setSortCriteria}
          startSearchPageItem={startSearchPageItem}
        />{' '}
      </ComponentWrapper>
    </div>
  );
};

export default BackendDisplayComponent;
