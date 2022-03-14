const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPageDefault: {
    root: generatePrefixedRootContext('test-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page/:id'),
  },
};

export {routes};
