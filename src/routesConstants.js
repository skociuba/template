const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  landingPage: {
    root: generatePrefixedRootContext('landing-page'),
  },
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPageDefault: {
    root: generatePrefixedRootContext('test-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page/:id'),
  },
  testPage2: {
    root: generatePrefixedRootContext('test-page2/:id'),
  },
};

export {routes};
