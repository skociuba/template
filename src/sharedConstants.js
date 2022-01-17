import {routes} from './routesConstants';

const shared = {
  routes: routes,
  header: {
    menu: {
      primary: [
        {name: 'Main', to: 'main-page'},
        {name: 'Radio', to: 'radio-page'},
        {name: 'Checkbox', to: 'checkbox-page'},
        {name: 'Select', to: 'select-page'},
        {name: 'Input', to: 'input-page'},
        {name: 'Grid', to: 'grid'},
        {name: 'UseImperativeHandler', to: 'use-imperative-handler-page'},
        {name: 'PassingDataToParent', to: 'passing-data-to-parent'},
        {name: 'RequestWithBody', to: 'request-with-body'},
        {name: 'PassingDataWithURL', to: 'passing-data-with-URL'},
      ],
    },
  },
};

export {shared};
