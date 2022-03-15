import React from 'react';

const TableForDevice = ({
  className,
  renderItem,
  headerData,
  bodyData,
  sortingEnabled,
  handleSorting,
  dataTestId,
  ...props
}) => {
  return (
    <table data-testid={dataTestId} {...props}>
      <thead>
        <tr>
          {Object.keys(headerData).map((itemKey, index) => (
            <th key={index}>{headerData[itemKey]?.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((rowData, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr>
              {Object.keys(headerData).map((itemKey, index) => (
                <td key={index}>{renderItem(rowData[itemKey])}</td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableForDevice;
