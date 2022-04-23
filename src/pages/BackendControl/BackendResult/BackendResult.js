import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import {Pagination} from 'components/Pagination';
import {sortData} from 'utils/sortData';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchBackendData} from '../actions';
import {testDataSelector, testLoadingSelector} from '../selectors';

import {contentContainer} from './BackendResult.style';

const sortMapping = {
  _id: '_id',
  name: 'name',
  trips: 'trips',
};

const BackendResult = ({setSortCriteria, handleSideEffect, recordPerPage, startSearchPageItem}) => {
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);
  const [sortingIndex, setSortingIndex] = useState(2);
  const [sortingStatus, setSortingStatus] = useState(1);

  const testData = useSelector((state) => testDataSelector(state)); //data from result endpoint

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const orderTableRef = useRef(null);
  const paginationRef = useRef();
  console.log(startSearchPageItem);

  useEffect(() => {
    dispatch(
      fetchBackendData({
        page: Math.floor(startSearchPageItem / 10),
        size: recordPerPage,
      }),
    );
  }, [dispatch, startSearchPageItem]);

  useEffect(() => {
    generateTableRows();
  }, [testData]);

  const handleSorting = (columnIndex, sortingType, index, status) => {
    setSortingIndex(index);
    setSortingStatus(status);
    setSortCriteria(
      //setSortCriteria are coming from reducer
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

  console.log(sortedData);

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
        totalNumberOfRecords={5005}
        recordPerPage={recordPerPage}
      />
    </div>
  );
};

BackendResult.propTypes = {
  fetchTestData: PropTypes.func,
};

export default BackendResult;
