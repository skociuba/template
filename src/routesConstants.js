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
    gridPage: {
      root: generatePrefixedRootContext('grid-page'),
    },
    checkboxPage: {
      root: generatePrefixedRootContext('checkbox-page'),
    },
    requestWithBody: {
      root: generatePrefixedRootContext('request-with-body'),
    },
    requestWithBodyOutput: {
      root: generatePrefixedRootContext('request-with-body-output/:nameOne/:nameTwo'),
    },
  },
};

export {shared};
