const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page'),
  },
  staticTable: {
    root: generatePrefixedRootContext('static-table-page'),
  },
  backendSorting: {
    root: generatePrefixedRootContext('backend-sorting-page'),
  },
};

export {routes};
