import {createSelector} from 'reselect';
import {getMultipleCriteria, getAllDependantItemsData, getDetailedCriteria} from 'utils/store';

export const testSelector = (state) => state.backend || {};

export const testDataSelector = createSelector(
  testSelector,
  (backend) => backend?.backend?.data?.data || null,
);

export const totalPagesSelector = createSelector(
  testSelector,
  (backend) => backend?.backend?.data?.totalPages || null,
);

export const criteriaDataSelector = createSelector(testSelector, (test) => test?.test?.data || {});

export const getAllSelectedCriteria = createSelector(criteriaDataSelector, (state) => {
  const multipleCriteria = getMultipleCriteria(state);
  const allDependantItemsData = getAllDependantItemsData(state, multipleCriteria);
  const {detailedCriteria, rangeCriteria} = getDetailedCriteria(
    multipleCriteria,
    allDependantItemsData,
  );
  return {
    detailed: detailedCriteria,
    range: rangeCriteria,
    sort: state.sort,
  };
});

export const testLoadingSelector = createSelector(testSelector, (backend) =>
  backend?.backend?.loading === undefined ? true : backend?.backend?.loading,
);
