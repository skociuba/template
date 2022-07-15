import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import renderItem from './helpers/renderItem';
import TableForDevice from './TableForDevice';
import Pagination from './Pagination';

const Table = ({
  headerData,
  bodyData,
  loading,
  withSorting,
  handleSorting,
  className,
  dataTestId,
  totalNumberOfRecords,
  handleSideEffect,
}) => {
  const recordPerPage = 2; //add to sharedConstants
  const [dataSlicePage, setDataSlicePage] = useState(1);
  const [dataSlice, setDataSlice] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    setDataSlice(
      bodyData.slice((dataSlicePage - 1) * recordPerPage, dataSlicePage * recordPerPage),
    );
  }, [dataSlicePage, bodyData]);

  const handleNext = () => {
    setDataSlicePage(dataSlicePage + 1);
  };
  const handlePrev = () => {
    setDataSlicePage(dataSlicePage - 1);
  };
  const handleJumpToPage = (page) => {
    setDataSlicePage(page);
  };
  const handleCurrentPage = (page) => {
    if (page) {
      setQueryParams({page: page});
      return;
    }
    return queryParams.get('page');
  };
  console.log(dataSlice);
  return (
    <div data-testid={dataTestId}>
      {loading || !bodyData?.length ? (
        <div>NO DATA</div>
      ) : (
        <>
          <TableForDevice
            className={className}
            renderItem={renderItem}
            headerData={headerData}
            bodyData={handleSideEffect ? bodyData : dataSlice}
            withSorting={withSorting}
            handleSorting={handleSorting}
            dataTestId={'table'}
          />
          {(totalNumberOfRecords || bodyData?.length) > recordPerPage && (
            <Pagination
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleJumpToPage={handleJumpToPage}
              handleSideEffect={handleSideEffect}
              totalNumberOfRecords={totalNumberOfRecords || bodyData?.length}
              recordPerPage={recordPerPage}
              handleCurrentPage={handleCurrentPage}
              currentPage={dataSlicePage}
            />
          )}
        </>
      )}
    </div>
  );
};

Table.propTypes = {
  headerData: PropTypes.object,
  bodyData: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
  withSorting: PropTypes.bool,
  handleSorting: PropTypes.func,
  dataTestId: PropTypes.string,
  totalNumberOfRecords: PropTypes.number,
  handleSideEffect: PropTypes.func,
};

Table.defaultProps = {
  headerData: {},
  bodyData: [],
  loading: true,
  className: '',
  withSorting: true,
  dataTestId: 'table',
};

Table.displayName = 'Table';

export default Table;
