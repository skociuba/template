//const link = `http://webdeveloperblog.cba.pl`;

export const getLinkWithParameter = (param) =>
  process.env.REACT_APP_CHANNEL_TYPE === 'customer'
    ? `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}`
    : `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}/${param}`;
