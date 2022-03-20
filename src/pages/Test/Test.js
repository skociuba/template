import React, {useEffect, useState, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import {sortData} from 'utils/sortData';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './Test.style';

const Test = () => {
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  useEffect(() => {
    generateTableRows();
  }, [testData]);

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
        returnValue = {...returnValue, [item]: renderItem(row, item)};
      });
      rowData.push(returnValue);
    });
    const returnSortedData = sorting
      ? sortData(rowData, sorting.columnIndex, sorting.sortingType)
      : rowData;
    setSortedData([...returnSortedData]);
  };

  const handleSorting = (columnIndex, sortingType) => {
    generateTableRows(sortingType === 'default' ? null : {columnIndex, sortingType});
  };

  // if no sorted date

  const bodyData = useMemo(() => {
    if (!testData) {
      return [];
    }

    const rows = testData.map(({_id, name, trips}) => ({
      id: {key: 'id', value: `${_id}`},
      name: {key: 'name', value: `${name}`},
      trips: {key: 'trips', value: `${trips}`},
    }));
    return [
      ...rows,
      {
        id: {key: 'id', value: `test1`},
        name: {key: 'name', value: `test2`}, //some additional data?
        trips: {key: 'trips', value: `test3`},
      },
    ];
  }, [testData]);

  const headerData = useMemo(() => {
    return {
      _id: {
        //id for bodyData
        title: 'id',
      },
      name: {
        title: 'name',
      },
      trips: {
        title: 'trips',
      },
    };
  }, []);

  const content = (
    <section data-testid="test-container">
      <Table
        loading={testLoadingExample}
        headerData={headerData}
        // bodyData={bodyData} //   in no sorting data
        //  withSorting={false}
        bodyData={sortedData}
        totalNumberOfRecords={bodyData?.length}
        handleSorting={handleSorting}
      />
    </section>
  );

  return <div className={contentContainer}>{content}</div>;
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
