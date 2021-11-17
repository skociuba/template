const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
  routes: {
    root: generatePrefixedRootContext(''),
    mainPage: {
      root: generatePrefixedRootContext('main-page'),
    },
    radioPage: {
      root: generatePrefixedRootContext('radio-page'),
    },
  },
};

export {shared};
