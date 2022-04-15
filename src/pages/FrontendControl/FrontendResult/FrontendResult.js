import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import {Pagination} from 'components/Pagination';
import {sortData} from 'utils/sortData';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';
import {testDataSelector, testLoadingSelector} from '../selectors';

import {contentContainer} from './FrontendResult.style';

const FrontendResult = () => {
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const recordPerPage = 5;

  const orderTableRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleSorting = (columnIndex, sortingType) => {
    useSelector(
      generateTableRows(
        sortingType === 'default' ? null : {sortingParams: {columnIndex, sortingType}},
      ),
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

    testData.map((row) => {
      let returnValue = {};
      Object.keys(row).forEach((item) => {
        const mappedRowItem = renderItem(row, item);
        if (mappedRowItem) {
          returnValue = {...returnValue, [item]: mappedRowItem};
        }
      });
      rowData.push(returnValue);
    });
    let returnSortedData = rowData;

    if (sorting?.sortingParams) {
      returnSortedData = sortData(
        rowData,
        sorting?.sortingParams?.columnIndex,
        sorting?.sortingParams?.sortingType,
      );
    }
    if (sorting?.paginationParams) {
      returnSortedData = returnSortedData.slice(
        sorting?.paginationParams?.startItem,
        sorting?.paginationParams?.endItem,
      );
    }
    if (returnSortedData?.length > recordPerPage) {
      returnSortedData = returnSortedData.slice(0, recordPerPage);
    }

    setSortedData([...returnSortedData]);
  };

  const handleSideEffect = (startItem, endItem) => {
    if (startItem && endItem && typeof startItem === 'number' && typeof endItem === 'number') {
      generateTableRows({paginationParams: {startItem: startItem, endItem: endItem}});
    }
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
      />
      <Pagination
        handleSideEffects={handleSideEffect}
        totalNumberOfRecords={testData?.length}
        recordPerPage={recordPerPage}
      />
    </div>
  );
};

FrontendResult.propTypes = {
  fetchTestData: PropTypes.func,
};

export default FrontendResult;
