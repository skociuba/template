import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: '/main-page'},
        {name: 'FrontendPaginationSorting', to: '/frontend-pagination-sorting'},
        {name: 'StaticTable', to: '/static-table-page'},
        {name: 'BackendControl', to: '/backend-control-page'},
        {name: 'FrontendControl', to: '/frontend-control-page'},
        {name: 'FrontendControlWithoutSharedConst', to: '/frontend-control-without-shared-page'},
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
    55: {
      title: '55',
      isSelected: false,
    },
    all: {
      title: 'all',
      isSelected: false,
    },
    jony: {
      title: 'jony',
      isSelected: false,
    },
    'John Doe': {
      title: `John Doe`,
      isSelected: false,
    },
    TestingFunda6450: {
      title: 'TestingFunda6450',
      isSelected: false,
    },
    TestingFunda4366: {
      title: 'TestingFunda4366',
      isSelected: false,
    },
    'TestingFunda5269`': {
      title: 'TestingFunda5269',
      isSelected: false,
    },
    TestingFunda6524: {
      title: 'TestingFunda6524',
      isSelected: false,
    },
    TestingFunda9515: {
      title: 'TestingFunda9515',
      isSelected: false,
    },
    TestingFunda5963: {
      title: 'TestingFunda5963',
      isSelected: false,
    },
  },
};

export {shared};
