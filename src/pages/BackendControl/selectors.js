import {createSelector} from 'reselect';

export const testSelector = (state) => state.backend || null;

export const testDataSelector = createSelector(
  testSelector,
  (backend) => backend?.backend?.data?.data || null,
);

export const filterSelector = createSelector(
  testSelector,
  (filter) => filter?.filters?.names || null,
);

export const filterNamesSelector = createSelector(filterSelector, (names) => {
  const selectedFilter = !names
    ? []
    : Object.keys(names).filter((nameKey) => names[nameKey].isSelected);
  return selectedFilter.length ? selectedFilter[0] : 'all';
});

export const testExampleSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.example || null,
);

export const testLoadingSelector = createSelector(testSelector, (backend) =>
  backend?.backend?.loading === undefined ? true : backend?.backend?.loading,
);
