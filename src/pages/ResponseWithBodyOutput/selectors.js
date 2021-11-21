import {createSelector} from 'reselect';

export const responseSelector = (state) => state.responseOutput || null;

export const responseDataSelector = createSelector(
  responseSelector,
  (response) => response?.request?.data?.data?.body || null,
);
