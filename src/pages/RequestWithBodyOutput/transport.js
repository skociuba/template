import {$get} from '../../utils/transport';

export const getTestData = ({config, queryParams}) => {
  const params = {
    url: `${config.urls.request}?${queryParams}`,
    headers: {...config.headers},
  };
  return $get(params);
};
