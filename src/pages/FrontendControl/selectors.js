import {createSelector} from 'reselect';

export const testSelector = (state) => state.frontendControl || null;

export const testDataSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.data || null,
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

export const testLoadingSelector = createSelector(testSelector, (test) =>
  test?.test?.loading === undefined ? true : test?.test?.loading,
);
