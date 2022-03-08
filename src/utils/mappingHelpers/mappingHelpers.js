import {shared} from 'sharedConstants';

export const getMapping = (mappedData) => {
  const getData = shared?.mapping?.find(({value}) => value === mappedData);
  return getData ? getData?.label : '';
};
