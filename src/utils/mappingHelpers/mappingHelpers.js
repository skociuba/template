import {shared} from 'sharedConstants';

const {statuses} = shared;

export const simpleMappersExample = (statusCode) => statuses[statusCode];

export const getMapping = (mappedData) => {
  const getData = shared?.mapping?.find(({value}) => value === mappedData);
  return getData ? getData?.label : '';
};
