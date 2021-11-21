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
    responseWithBody: {
      root: generatePrefixedRootContext('response-with-body'),
    },
    responseWithBodyOutput: {
      root: generatePrefixedRootContext('response-with-body-output/:test'),
    },
  },
};

export {shared};
