import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import renderItem from './helpers/renderItem';
import TableForDevice from './TableForDevice';
import Pagination from './Pagination';

const Table = ({
  headerData,
  bodyData,
  loading,
  sortingEnabled,
  handleSorting,
  className,
  dataTestId,
  totalNumberOfRecords,
  handleSideEffect,
}) => {
  const recordPerPage = 15;
  const [dataSlicePage, setDataSlicePage] = useState(1);
  const [dataSlice, setDataSlice] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    setDataSlice(
      bodyData.slice((dataSlicePage - 1) * recordPerPage, dataSlicePage * recordPerPage),
    );
  }, [dataSlicePage, bodyData]);

  console.log(dataSlice);

  const handleNext = () => {
    setDataSlicePage(dataSlicePage + 1);
  };
  const handlePrevious = () => {
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
            sortingEnabled={sortingEnabled}
            handleSorting={handleSorting}
            dataTestId={'table'}
          />
          {(totalNumberOfRecords || bodyData?.length) > recordPerPage && (
            <Pagination
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              handleJumpToPage={handleJumpToPage}
              handleSideEffect={handleSideEffect}
              totalNumberOfRecords={totalNumberOfRecords}
              recordPerPage={recordPerPage}
              handleCurrentPage={handleCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Table;
