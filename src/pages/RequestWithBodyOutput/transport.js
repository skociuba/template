import {$get} from '../../utils/transport';

export const getTestData = ({config, queryParams}) => {
  const params = {
    url: `${config.urls.request}?${queryParams}`,
    headers: {...config.headers},
  };
  // const params = {
  //   url: `${config.urls.request}?${encodeURIComponent(JSON.stringify(queryParams))}`,
  //   headers: {...config.headers},          when we have complicated structure
  // };
  return $get(params);
};
