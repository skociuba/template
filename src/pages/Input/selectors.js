import {createSelector} from 'reselect';

export const testSelector = (state) => state.input || null;

export const inputDataSelector = createSelector(
  testSelector,
  (input) => input?.dataFromInput?.name || null,
);
