import {$get} from '../../utils/transport';

export const getTestData = ({config, queryParams}) => {
  const params = {
    url: `${config.urls.request}?${queryParams}`,
    headers: {...config.headers},
  };

  //   const names= {
  //     nameOne:queryParams?.nameOne,
  //     nameTwo:queryParams?.nameTwo,          when we have complicated structure
  //   };
  // const params = {
  //   url: `${config.urls.request}?${encodeURIComponent(JSON.stringify(names))}`,
  //   headers: {...config.headers},
  // };
  return $get(params);
};
