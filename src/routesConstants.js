const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  errorPage: {
    root: generatePrefixedRootContext('error-page'),
  },
  validationDisplay: {
    root: generatePrefixedRootContext('validation-page'),
  },
  wizardDisplay: {
    root: generatePrefixedRootContext('wizard-page'),
  },
  listDisplay: {
    root: generatePrefixedRootContext('list-page'),
  },
  searchDisplay: {
    root: generatePrefixedRootContext('search-page'),
  },
  inputDisplay: {
    root: generatePrefixedRootContext('input-page'),
  },
};

export {routes};
