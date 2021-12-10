import {createSelector} from 'reselect';

export const testSelector = (state) => state?.example || null;

export const testDataSelector = createSelector(testSelector, (example) => example?.example || null);
