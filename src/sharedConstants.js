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
};

export {shared};
