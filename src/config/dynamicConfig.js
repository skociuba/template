const { REACT_APP_URLS_TEST } = process.env
const dynamicConfig = {
  urls: {
    test: REACT_APP_URLS_TEST,
  },
}
export default { ...dynamicConfig }
