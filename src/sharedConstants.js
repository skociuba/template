import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: '/main-page'},
        {name: 'FrontendControl', to: '/frontend-control-page'},
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
  names: {
    '603be08a2987d5267f590d2f': {
      title: '603be08a2987d5267f590d2f',
      isSelected: false,
    },
    '603be21b2987d50c34590d38': {
      title: '603be21b2987d50c34590d38',
      isSelected: false,
    },
    all: {
      title: 'all',
      isSelected: false,
    },
  },
};

export {shared};
