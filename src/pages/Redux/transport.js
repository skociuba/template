import {$get} from '../../utils/transport';

export const getTestData = ({config}) => {
  const params = {
    url: config.urls.test2,
    headers: {...config.headers},
  };
  return $get(params);
};
