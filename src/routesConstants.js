const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },

  frontendControl: {
    root: generatePrefixedRootContext('frontend-control-page'),
  },
};

export {routes};
