export const sortData = (elements, columnIndex, sortingType) => {
  const getElement = (element) => {
    if (!element) {
      return 0;
    }

    const reactElement = element?.props?.children;
    if (reactElement) {
      return reactElement;
    }

    if (element.constructor === Array) {
      const getSortableItem = element.filter((item) => {
        return item.sortable;
      });
      if (getSortableItem.length) {
        const {value} = getSortableItem[0];
        return value?.props?.children || value;
      }
      return '0';
    }
    return element;
  };
  return [...elements].sort((a, b) => {
    const firstElement = getElement(a[columnIndex].value);
    const secondElement = getElement(b[columnIndex].value);

    if (sortingType === 'asc') {
      if (firstElement.constructor === Number && secondElement.constructor === Number) {
        return Number(firstElement) - Number(secondElement);
      } else if (firstElement.constructor === String && secondElement.constructor === String) {
        return firstElement.localeCompare(secondElement);
      }
    } else {
      if (firstElement.constructor === Number && secondElement.constructor === Number) {
        return Number(secondElement) - Number(firstElement);
      } else if (firstElement.constructor === String && secondElement.constructor === String) {
        return secondElement.localeCompare(firstElement);
      }
    }
  });
};
