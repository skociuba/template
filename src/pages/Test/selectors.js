import { createSelector } from "reselect"

export const testSelector = (state) => state.test || null

export const testDataSelector = createSelector(
  testSelector,
  (test) => test?.data || null
)
export const testLoadingSelector = createSelector(testSelector, (test) =>
  test?.loading === undefined ? true : test?.loading
)
