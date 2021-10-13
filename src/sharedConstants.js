const generatePrefixedRootContext = (path) => `/${path}`;

const shared = {
    routes: {
        root: generatePrefixedRootContext(''),
        testPage: {
            root: generatePrefixedRootContext('test-page'),
        },
    }
}

export { shared }
