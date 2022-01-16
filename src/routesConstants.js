const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  radioPage: {
    root: generatePrefixedRootContext('radio-page'),
  },
  checkboxPage: {
    root: generatePrefixedRootContext('checkbox-page'),
  },
  select: {
    root: generatePrefixedRootContext('select-page'),
  },
  input: {
    root: generatePrefixedRootContext('input-page'),
  },
  grid: {
    root: generatePrefixedRootContext('grid'),
  },
  useImperativeHandler: {
    root: generatePrefixedRootContext('use-imperative-handler-page'),
  },
  passingDataToParent: {
    root: generatePrefixedRootContext('passing-data-to-parent'),
  },
  requestWithBody: {
    root: generatePrefixedRootContext('request-with-body'),
  },
  requestWithBodyOutput: {
    root: generatePrefixedRootContext('request-with-body-output/:nameOne/:nameTwo'),
  },
};

export {routes};
