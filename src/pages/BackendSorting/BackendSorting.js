import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import {Pagination} from 'components/Pagination';
import {sortData} from 'utils/sortData';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './BackendSorting.style';

const sortMapping = {
  _id: '_id',
  name: 'name',
  trips: 'trips',
};

const BackendSorting = ({setSortCriteria, selectedCriteria}) => {
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);
  const [startSearchPageItem, setStartSearchPageItem] = useState(0);
  const [endSearchPageItem, setEndSearchPageItem] = useState(0);
  const [sortingIndex, setSortingIndex] = useState(2);
  const [sortingStatus, setSortingStatus] = useState(1);

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const recordPerPage = 2;

  const orderTableRef = useRef(null);
  const paginationRef = useRef();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  useEffect(() => {
    if (startSearchPageItem && endSearchPageItem) {
      //  dispatch(fetchSearchForFundsResults({criteria:selectedCriteria,startItem:startSearchPageItem,endItem:endSearchPageItem,recordPerPage:recordPerPage}));
      // po kliknięciu funkcji  handleSideEffect startSearchPageItem i endSearchPageItem zmienia sie na niezerowe i w wyniku czego odpalana jest funkcja fetchSearchForFundsResults wraz z przesłaniem parametrów w body, ta sama funkcja przesłana do paginacji powoduje że wartości startItem, endItem przesyłają odpowiednie dane jako parametry

      //selectedCriteria tworzone jest w selectorze i zwraca wartość filtracji sortowania i range???

      //startItem, endItem i recordPerPage są potrzebne do paginacji a selectedCriteria do filtracji i sortowania
      setStartSearchPageItem(0);
      setEndSearchPageItem(0);
    }
  }, [startSearchPageItem, endSearchPageItem]);

  useEffect(() => {
    generateTableRows();
  }, [testData]);

  const handleSorting = (columnIndex, sortingType, index, status) => {
    setSortingIndex(index);
    setSortingStatus(status);
    setSortCriteria(
      //setSortCriteria are coming from backend
      sortingType !== 'default'
        ? [
            {
              sortKey: sortMapping[columnIndex],
              sortOrder: sortingType,
            },
          ]
        : [],
    );
  };

  const renderItem = (rowItem, key) => {
    switch (key) {
      case '_id':
        return {key: key, value: rowItem[key]};
      case 'name':
        return {key: key, value: rowItem[key], type: 'bigLetter'};
      case 'trips':
        return {key: key, value: rowItem[key]};
      default:
        return {key: key, value: rowItem[key]};
    }
  };

  const generateTableRows = (sorting) => {
    if (!testData) {
      return [];
    }
    const rowData = [];

    testData.forEach((row) => {
      let returnValue = {};
      Object.keys(row).forEach((item) => {
        const mappedRowItem = renderItem(row, item);

        returnValue = {...returnValue, [item]: mappedRowItem};
      });
      rowData.push(returnValue);
    });
    const returnSortedData = sorting
      ? sortData(rowData, sorting?.columnIndex, sorting?.sortingType)
      : rowData;

    setSortedData([...returnSortedData]);
  };

  const handleSideEffect = (startItem = 1, endItem = 5) => {
    setStartSearchPageItem(startItem);
    setEndSearchPageItem(endItem);
  };
  console.log(startSearchPageItem);

  const headerData = {
    _id: {
      title: 'id',
    },
    name: {
      title: 'name',
    },
    trips: {
      title: 'trips',
    },
  };

  return (
    <div className={contentContainer} ref={orderTableRef} data-testid="test-container">
      <Table
        loading={testLoadingExample}
        headerData={headerData}
        bodyData={sortedData}
        handleSorting={handleSorting}
        defaultSortingIndex={sortingIndex}
        defaultSortingStatus={sortingStatus}
      />
      <Pagination
        ref={paginationRef}
        handleSideEffects={handleSideEffect}
        totalNumberOfRecords={testData?.length}
        recordPerPage={recordPerPage}
      />
    </div>
  );
};

BackendSorting.propTypes = {
  fetchTestData: PropTypes.func,
};

export default BackendSorting;
