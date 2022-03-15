import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'LandingPage', to: '/landing-page'},
        {name: 'Main', to: '/main-page'},
        {name: 'Test', to: '/test-page'},
        {name: 'Test2', to: '/test-page2'},
      ],
    },
  },
  mapping: [{value: 'testData', label: 'MappedData'}],
  statuses: {
    B: {
      title: 'BUY',
    },
    S: {
      title: 'SELL',
    },
  },
};

export {shared};
