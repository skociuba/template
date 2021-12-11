const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
  routes: {
    root: generatePrefixedRootContext(''),
    mainPage: {
      root: generatePrefixedRootContext('main-page'),
    },
    examplePage: {
      root: generatePrefixedRootContext('example-page'),
    },
  },
};

export {shared};
