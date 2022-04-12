const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  frontendPaginationSorting: {
    root: generatePrefixedRootContext('frontend-pagination-sorting'),
  },
  staticTable: {
    root: generatePrefixedRootContext('static-table-page'),
  },
  backendControl: {
    root: generatePrefixedRootContext('backend-control-page'),
  },
};

export {routes};
