const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
  routes: {
    root: generatePrefixedRootContext(''),
    mainPage: {
      root: generatePrefixedRootContext('main-page'),
    },
  },
};

export {shared};
