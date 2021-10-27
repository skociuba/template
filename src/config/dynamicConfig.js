const {NODE_ENV, REACT_APP_URLS_TEST, REACT_APP_CHANNEL_TYPE, REACT_APP_ENV_TYPE} = process.env;

const dynamicConfig = {
  urls: {
    test: REACT_APP_URLS_TEST,
  },
  params: {},
  headers: {},
  envType: REACT_APP_ENV_TYPE,
  channelType: REACT_APP_CHANNEL_TYPE,
};
export const CHANNEL_TYPE = REACT_APP_CHANNEL_TYPE;
export const ENV_TYPE = NODE_ENV;
export const ROOT_PREFIX = '';

// eslint-disable-next-line import/no-anonymous-default-export
export default {...dynamicConfig};
