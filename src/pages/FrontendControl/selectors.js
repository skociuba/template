import {createSelector} from 'reselect';

export const testSelector = (state) => state.frontendControl || null;

export const testDataSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.data || null,
);

export const filterSelector = createSelector(
  testSelector,
  (filter) => filter?.filters?._id?.value || null,
);

export const filterNamesSelector = createSelector(filterSelector, (id) => {
  const selectedFilter = !id ? [] : id;
  return selectedFilter?.length ? selectedFilter : 'all';
});

export const testExampleSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.example || null,
);

export const testLoadingSelector = createSelector(testSelector, (test) =>
  test?.test?.loading === undefined ? true : test?.test?.loading,
);
