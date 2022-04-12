import React, {useEffect, useMemo, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './StaticTable.style';

const StaticTable = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  const orderTableRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const bodyData = useMemo(() => {
    if (!testData) {
      return [];
    }

    const rows = testData.map(({_id, name, trips}) => ({
      id: {key: 'id', value: `${_id}`},
      name: {key: 'name', value: `${name}`},
      trips: {key: 'trips', value: `${trips}`},
    }));
    return [...rows];
  }, [testData]);

  const headerData = useMemo(() => {
    return {
      id: {
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

  return (
    <div className={contentContainer} ref={orderTableRef} data-testid="test-container">
      <Table
        loading={testLoadingExample}
        headerData={headerData}
        bodyData={bodyData}
        withSorting={false}
      />
    </div>
  );
};

StaticTable.propTypes = {
  fetchTestData: PropTypes.func,
};

export default StaticTable;
