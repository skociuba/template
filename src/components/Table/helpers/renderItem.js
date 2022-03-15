import React from 'react';

const renderItem = (item) => {
  if (!item) {
    return;
  }

  switch (item.type) {
    case 'one':
      return <div>{item?.value}</div>;
    case 'two':
      return <div>{item?.value}</div>;
    default:
      return <div>{item?.value}</div>;
  }
};

export default renderItem;
