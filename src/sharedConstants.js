import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: '/main-page'},
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
  defaultSort: [
    {
      sortKey: 'id',
      sortOrder: 'desc',
    },
  ],
  getDataFromBackendCriteriaKeys: ['EXAMPLE3', 'EXAMPLE4'],
  backend: {
    mappedDataOne: {
      backendMappingKey: 'EXAMPLE1',
      items: [
        {
          key: 'EXAMPLE1Key1',
          title: 'EXAMPLE1Key1',
          isSelected: false,
        },
        {
          key: 'EXAMPLE1Key2',
          title: 'EXAMPLE1Key2',
          isSelected: false,
        },
        {
          key: 'EXAMPLE1Key3',
          title: 'EXAMPLE1Key3',
          isSelected: false,
        },
      ],
    },

    mappedDataTwo: {
      backendMappingKey: 'EXAMPLE2',
      items: [
        {
          key: 'EXAMPLE2Key1',
          title: 'EXAMPLE2Key1',
          isSelected: false,
        },
        {
          key: 'EXAMPLE2Key2',
          title: 'EXAMPLE2Key2',
          isSelected: false,
        },
        {
          key: 'EXAMPLE2Key3',
          title: 'EXAMPLE2Key3',
          isSelected: false,
        },
      ],
    },
  },
};

export {shared};
