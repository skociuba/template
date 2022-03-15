import React, {useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'components/Table';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector} from './selectors';
import {contentContainer} from './Test.style';

const Test = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));

  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

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
        name: {key: 'name', value: `test2`},
        trips: {key: 'trips', value: `test3`},
      },
    ];
  }, [testData]);

  const content = (
    <section data-testid="test-container">
      <Table
        loading={testLoadingExample}
        sortingEnabled={false}
        headerData={headerData}
        bodyData={bodyData}
      />
    </section>
  );

  return <div className={contentContainer}>{content}</div>;
};

Test.propTypes = {
  fetchTestData: PropTypes.func,
};

export default Test;
