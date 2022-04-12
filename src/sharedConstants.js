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
