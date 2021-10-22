const { NODE_ENV, REACT_APP_URLS_TEST, REACT_APP_CHANNEL_TYPE } = process.env

const dynamicConfig = {
  urls: {
    test: REACT_APP_URLS_TEST,
  },
  channelType: REACT_APP_CHANNEL_TYPE,
}
export const CHANNEL_TYPE = REACT_APP_CHANNEL_TYPE
export const ENV_TYPE = NODE_ENV
export const ROOT_PREFIX = ""

export default { ...dynamicConfig };
