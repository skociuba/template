import actionNames from "./../utils/actionName"

export const valueToLover = (v) => v.toLoverCase()
export const LOCAL_SESSION_DURATION_SEC = 15 * 60
export const ENVS = actionNames(
  ["PRODUCTION", "DEVELOPMENT", "TESTING", "QA"],
  valueToLover
)
export const APP_ENVS = actionNames(["LOCAL", "TESTING"], valueToLover)
export const APP_CHANNELS = actionNames(["STAFF", "CUSTOMER"], valueToLover)
