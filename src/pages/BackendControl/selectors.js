import {createSelector} from 'reselect';

export const testSelector = (state) => state.backend || null;

export const testDataSelector = createSelector(
  testSelector,
  (backend) => backend?.backend?.data?.data || null,
);

export const totalPagesSelector = createSelector(
  testSelector,
  (backend) => backend?.backend?.data?.totalPages || null,
);

export const criteriaDataSelector = createSelector(
  testSelector,
  (test) => test?.test?.data || null,
);

export const testLoadingSelector = createSelector(testSelector, (backend) =>
  backend?.backend?.loading === undefined ? true : backend?.backend?.loading,
);
