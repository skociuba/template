const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
  routes: {
    root: generatePrefixedRootContext(''),
    mainPage: {
      root: generatePrefixedRootContext('main-page'),
    },
    testPage: {
      root: generatePrefixedRootContext('test-page'),
    },
    examplePage: {
      root: generatePrefixedRootContext('example-page'),
    },
  },
};

export {shared};
