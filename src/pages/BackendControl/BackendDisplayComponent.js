import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ComponentWrapper} from '../../components/ComponentWrapper/index';

import {
  testDataSelector,
  totalPagesSelector,
  criteriaDataSelector,
  getAllSelectedCriteria,
} from './selectors';
import {fetchBackendData, fetchTestData, sortData} from './actions';
import {filterData, toggleData, resetData} from './actions';
import BackendResult from './BackendResult/BackendResult';
import BackendCriteria from './BackendCriteria/BackendCriteria';
const BackendDisplayComponent = () => {
  const dispatch = useDispatch();
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);
  const testData = useSelector((state) => testDataSelector(state));
  const selectedCriteria = useSelector((state) => getAllSelectedCriteria(state));
  const criteriaData = useSelector((state) => criteriaDataSelector(state));
  const totalNumberOfRecords = useSelector((state) => totalPagesSelector(state));

  const recordPerPage = 5;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // tu się trochę miesza bo żebysortować i paginować trzeba mieć zwrucony endpoint, a do tego trzeba inną paginację => page: Math.floor(startSearchPageItem / 10), a jak odpalę ten drugi use efect to nie mam tabeli i nie mogę sortować ani paginować

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      dispatch(
        fetchBackendData({
          page: Math.floor(startSearchPageItem / 5),
          size: recordPerPage,
          criteria: selectedCriteria,
          startItem: startSearchPageItem,
          endItem: endSearchPageItem,
          recordPerPage: recordPerPage,
        }),
      );
    }
  }, [dispatch, startSearchPageItem, endSearchPageItem]);

  //przykład z origin

  // useEffect(() => {
  //   if (startSearchPageItem && endSearchPageItem) {
  //     dispatch(
  //       fetchBackendData({
  //         criteria: selectedCriteria,
  //         startItem: startSearchPageItem,
  //         endItem: endSearchPageItem,
  //         recordPerPage: recordPerPage,
  //       }),
  //     );
  //     setStartSearchPageItem(0);
  //     setEndSearchPageItem(0);
  //   }
  // }, [dispatch, startSearchPageItem, endSearchPageItem]);

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

  return (
    <ComponentWrapper hasTopMargin={true} hasBottomMargin={true}>
      {
        <BackendCriteria
          handleSideEffect={handleSideEffect}
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
  );
};

export default BackendDisplayComponent;
