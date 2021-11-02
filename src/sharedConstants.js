const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
  routes: {
    root: generatePrefixedRootContext(''),
    testPage: {
      root: generatePrefixedRootContext('test-page'),
    },
    newPage: {
      root: generatePrefixedRootContext('new-page'),
    },
    redux: {
      root: generatePrefixedRootContext('redux'),
    },
    mockTest: {
      root: generatePrefixedRootContext('mock-test'),
    },
  },
};

export {shared};
