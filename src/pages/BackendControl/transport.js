import {$get} from '../../utils/transport';

export const getBackendData = ({
  config,
  queryParams,
  criteria,
  startItem,
  endItem,
  recordPerPage,
}) => {
  const {page, size} = queryParams || {};
  const params = {
    url: `${config.urls.backend}?page=${page}&size=${size}`,
    headers: {...config.headers},
  };
  console.log({
    detailedCriterias: criteria?.detailed,
    rangeCriterias: criteria?.range,
    numberOfRecords: recordPerPage,
    startDetail: typeof startItem === 'number' ? startItem : 1,
    endDetail: typeof endItem === 'number' ? endItem : recordPerPage,
    sortCriterias: criteria?.sort,
    holdings: [],
  });
  return $get(params);
};

//real result endpoint

// export const getSearchResult = ({config, criteria, startItem, endItem, recordPerPage}) => {
//   let params = {
//     url: config.urls.backend,
//     body: {
//       detailedCriterias: criteria?.detailed,
//       rangeCriterias: criteria?.range,
//       numberOfRecords: recordPerPage,
//       startDetail: typeof startItem === 'number' ? startItem : 1,
//       endDetail: typeof endItem === 'number' ? endItem : recordPerPage,
//       sortCriterias: criteria?.sort,
//       holdings: [],
//     },
//     headers: {...config.headers},
//   };

//   return $post(params);
// };

export const getTestData = ({config}) => {
  const params = {
    url: config.urls.test,
    headers: {...config.headers},
  };
  return $get(params);
};
