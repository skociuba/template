import {createSelector} from 'reselect';

export const testSelector = (state) => state.select || null;

export const testDataSelector = createSelector(
  testSelector,
  (select) => select?.select?.data?.data || null,
);
export const selectDataSelector = createSelector(
  testSelector,
  (select) => select?.dataFromSelect || null,
);

export const testLoadingSelector = createSelector(testSelector, (select) =>
  select?.select?.loading === undefined ? true : select?.select?.loading,
);
