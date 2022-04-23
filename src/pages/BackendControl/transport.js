import {$get} from '../../utils/transport';

export const getTestData = ({config, queryParams}) => {
  const {page, size} = queryParams || {};
  const params = {
    url: `${config.urls.backend}?page=${page}&size=${size}`,
    headers: {...config.headers},
  };
  console.log(queryParams);
  return $get(params);
};
