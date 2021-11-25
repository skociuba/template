import {createSelector} from 'reselect';

export const testSelector = (state) => state.checkbox || null;

export const testDataSelector = createSelector(
  testSelector,
  (checkbox) => checkbox?.checkbox?.data?.data || null,
);

export const testBooleanSelector = createSelector(
  testSelector,
  (checkbox) => checkbox?.boolean || null,
);

export const testLoadingSelector = createSelector(testSelector, (checkbox) =>
  checkbox?.checkbox?.loading === undefined ? true : checkbox?.checkbox?.loading,
);
