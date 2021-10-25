import actionNames from './../utils/actionNames';

export const valueToLower = (v) => v.toLowerCase();
export const LOCAL_SESSION_DURATION_SEC = 15 * 60;
export const ENVS = actionNames(
  ['PRODUCTION', 'DEVELOPMENT', 'TESTING', 'QA'],
  valueToLower,
);
export const APP_ENVS = actionNames(['LOCAL', 'TESTING'], valueToLower);
export const APP_CHANNELS = actionNames(['STAFF', 'CUSTOMER'], valueToLower);
