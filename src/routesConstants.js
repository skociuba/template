const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },

  backendControl: {
    root: generatePrefixedRootContext('backend-control-page'),
  },
};

export {routes};
