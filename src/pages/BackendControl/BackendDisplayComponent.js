import React, {useState, useEffect} from 'react';
import ComponentWrapper from 'seba-container-wrapper';
import {useDispatch, useSelector} from 'react-redux';

import {testDataSelector, totalPagesSelector, criteriaDataSelector} from './selectors';
import {fetchBackendData, fetchTestData, sortData} from './actions';
import {filterData, toggleData, resetData} from './actions';
import BackendResult from './BackendResult/BackendResult';
import BackendCriteria from './BackendCriteria/BackendCriteria';
const BackendDisplayComponent = () => {
  const dispatch = useDispatch();
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);
  const testData = useSelector((state) => testDataSelector(state));
  const selectedCriteria = useSelector((state) => testDataSelector(state)); // ad this in selector and they going to body in response endpoint
  const criteriaData = useSelector((state) => criteriaDataSelector(state));
  const totalNumberOfRecords = useSelector((state) => totalPagesSelector(state));

  const recordPerPage = 10;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    dispatch(
      fetchBackendData({
        page: Math.floor(startSearchPageItem / 10),
        size: recordPerPage,
      }),
    );
  }, [dispatch, startSearchPageItem]);

  //przykład z origin

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      dispatch(
        fetchBackendData({
          criteria: selectedCriteria,
          startItem: startSearchPageItem,
          endItem: endSearchPageItem,
          recordPerPage: recordPerPage,
        }),
      );
      setStartSearchPageItem(0);
      setEndSearchPageItem(0);
    }
  }, [startSearchPageItem, endSearchPageItem]);

  //     po kliknięciu funkcji  handleSideEffect startSearchPageItem i endSearchPageItem zmienia sie na niezerowe i w wyniku czego odpalana jest funkcja fetchSearchForFundsResults wraz z przesłaniem parametrów w body, ta sama funkcja przesłana do paginacji powoduje że wartości startItem, endItem przesyłają odpowiednie dane jako parametry
  //     selectedCriteria tworzone jest w selectorze i zwraca wartość filtracji sortowania i range???
  //    startItem, endItem i recordPerPage są potrzebne do paginacji a selectedCriteria do filtracji i sortowania

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(fetchTestData()); //odpalasz criteria endpoint
  }, [dispatch]);

  const handleSideEffect = (startItem = 1, endItem = 10) => {
    //w oryginale handleSearchResult
    setStartSearchPageItem(startItem);
    setEndSearchPageItem(endItem);
  };

  console.log(criteriaData);

  return (
    <div>
      <ComponentWrapper hasTopMargin={true}>
        {
          <BackendCriteria
            handleSideEffect={handleSideEffect} // to samo co handleSearchResult
            filterData={filterData} //funkcja updatuje stan w reducerze zamiast setSearchForFundCriteria
            toggleData={toggleData} //funkcja updatuje stan w reducerze
            criteriaData={criteriaData} //dane ze stanu w moim przypadku z selectora useSelect
            resetData={resetData}
          />
        }
        <BackendResult
          testData={testData}
          handleSideEffect={handleSideEffect}
          recordPerPage={recordPerPage}
          startSearchPageItem={startSearchPageItem}
          totalNumberOfRecords={totalNumberOfRecords}
          setSortData={sortData}
        />{' '}
      </ComponentWrapper>
    </div>
  );
};

export default BackendDisplayComponent;
