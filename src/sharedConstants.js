const generatePrefixedRootContext = (path) => `/${path}`

const shared = {
  routes: {
    root: generatePrefixedRootContext(""),
    testPage: {
      root: generatePrefixedRootContext("test-page"),
    },
    newPage: {
      root: generatePrefixedRootContext("new-page"),
    },
  },
}

export { shared }
