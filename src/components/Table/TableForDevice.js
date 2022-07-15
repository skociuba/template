import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button';

const MAP_SORTING_OPTION = ['default', 'asc', 'undefined'];

import {sorterContainer, sortingContainer, dataContainer} from './TableForDevice.style';
const TableForDevice = ({
  className,
  renderItem,
  headerData,
  bodyData,
  withSorting,
  handleSorting,
  dataTestId,
  ...props
}) => {
  const [sortingIndex, setSortingIndex] = useState(null);
  const [currentSortingStatus, setCurrentSortingStatus] = useState(0);

  console.log(bodyData);

  const Sorter = ({index}) => (
    <div className={sorterContainer(index === sortingIndex ? currentSortingStatus : 0)}>
      <Button>top</Button>
      <Button>down</Button>
    </div>
  );

  const handleSortBy = (index, item) => {
    const sortingStatus =
      sortingIndex !== index ? 1 : currentSortingStatus >= 2 ? 0 : currentSortingStatus + 1;
    setSortingIndex(index);
    setCurrentSortingStatus(sortingStatus);
    if (handleSorting) {
      handleSorting(item, MAP_SORTING_OPTION[sortingStatus]);
    }
  };

  return (
    <table data-testid={dataTestId} {...props}>
      <thead>
        <tr>
          {Object.keys(headerData).map((itemKey, index) => (
            <th key={index} onClick={withSorting ? handleSortBy.bind(this, index, itemKey) : null}>
              <div className={sortingContainer}>
                {headerData[itemKey]?.title}
                {withSorting && <Sorter index={index} />}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((rowData, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr>
              {Object.keys(headerData).map((itemKey, index) => (
                <td key={index}>
                  <div className={dataContainer}>{renderItem(rowData[itemKey])} </div>
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

TableForDevice.propTypes = {
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

TableForDevice.defaultProps = {
  headerData: {},
  bodyData: [],
  className: '',
  withSorting: true,
  dataTestId: 'table',
};

export default TableForDevice;
