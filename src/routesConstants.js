const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext('main-page'),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page'),
  },
};

export {routes};
