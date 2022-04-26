import {$get} from '../../utils/transport';

export const getBackendData = ({config, queryParams}) => {
  const {page, size} = queryParams || {};
  const params = {
    url: `${config.urls.backend}?page=${page}&size=${size}`,
    headers: {...config.headers},
  };

  return $get(params);
};

export const getTestData = ({config}) => {
  const params = {
    url: config.urls.test,
    headers: {...config.headers},
  };
  return $get(params);
};
