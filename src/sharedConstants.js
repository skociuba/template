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

  getDataFromBackendCriteriaKeys: ['EXAMPLE3', 'EXAMPLE4'],

  defaultSort: [
    {
      sortKey: '_id',
      sortOrder: 'desc',
    },
  ],

  defaultDetailedCriteria: [
    {
      criteriaKey: 'PST',
      criteriaValue: 'UT',
      operator: 'eq',
    },
  ],

  backend: {
    mappedDataOne: {
      backendMappingKey: 'EXAMPLE1',
      items: [
        {
          key: 'EXAMPLE1Key1',
          title: 'EXAMPLE1Key1',
          isSelected: false,
          range: {min: 1, max: 2},
        },
        {
          key: 'EXAMPLE1Key2',
          title: 'EXAMPLE1Key2',
          isSelected: false,
          range: {min: 3, max: 4},
        },
        {
          key: 'EXAMPLE1Key3',
          title: 'EXAMPLE1Key3',
          isSelected: false,
          range: {min: 5, max: 5},
        },
      ],
      operator: '',
      type: 'range',
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
      operator: 'in',
      type: 'detailed',
    },
    input: {
      backendMappingKey: 'keyword',
      value: '',
      operator: 'in',
      type: 'detailed',
    },
  },
};

export {shared};
