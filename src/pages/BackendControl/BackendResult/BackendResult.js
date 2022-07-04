import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import {Pagination} from 'components/Pagination';
import {sortData} from 'utils/sortData';

import 'react-loading-skeleton/dist/skeleton.css';

import {testLoadingSelector} from '../selectors';

import {} from './BackendResult.style';

const sortMapping = {
  _id: '_id',
  name: 'name',
  trips: 'trips',
};

const BackendResult = ({
  handleSideEffect,
  totalNumberOfRecords,
  recordPerPage,
  testData,
  setSortData,
}) => {
  const [sortedData, setSortedData] = useState([]);
  const [sortingIndex, setSortingIndex] = useState(2);
  const [sortingStatus, setSortingStatus] = useState(1);

  const dispatch = useDispatch();

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const resultTableRef = useRef(null);
  const paginationRef = useRef();

  useEffect(() => {
    generateTableRows();
  }, [testData]);

  const handleSorting = (columnIndex, sortingType, index, status) => {
    setSortingIndex(index);
    setSortingStatus(status);
    dispatch(
      setSortData(
        sortingType !== 'default'
          ? [
              {
                sortKey: sortMapping[columnIndex],
                sortOrder: sortingType,
              },
            ]
          : [],
      ),
    );
    paginationRef.current.handleJumpToPage(1);
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

  return (
    <div ref={resultTableRef} data-testid="test-container">
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
        onChange={() => {}}
        handleSideEffects={handleSideEffect}
        totalNumberOfRecords={totalNumberOfRecords}
        recordPerPage={recordPerPage}
      />
    </div>
  );
};

BackendResult.propTypes = {
  fetchTestData: PropTypes.func,
};

export default BackendResult;
