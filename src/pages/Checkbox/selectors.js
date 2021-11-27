import {createSelector} from 'reselect';

export const testSelector = (state) => state.checkbox || null;

export const testDataSelector = createSelector(
  testSelector,
  (checkbox) => checkbox?.checkbox?.data?.data || null,
);

export const testCheckboxSelector = createSelector(
  testSelector,
  (checkbox) => checkbox?.boolean || false,
);

export const testLoadingSelector = createSelector(testSelector, (checkbox) =>
  checkbox?.checkbox?.loading === undefined ? true : checkbox?.checkbox?.loading,
);
