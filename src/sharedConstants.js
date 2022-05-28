import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: '/main-page'},
        {name: 'Test', to: '/test-page'},
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
  errors: {
    400: {title: ' Bad Request'},
    401: {title: 'Unauthorized'},
    402: {title: 'Payment Required'},
    403: {title: 'Forbidden'},
    404: {title: 'Not Found'},
    405: {title: 'Method Not Allowed'},
  },
};

export {shared};
