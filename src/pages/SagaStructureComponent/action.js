import { createAction } from "redux-actions"
import actionNames from "utils/actionNames"

const FETCH_TEST = "FETCH_TEST"
const FETCH_TEST_SUCCESS = "FETCH_TEST_SUCCESS"
const FETCH_TEST_FAIL = "FETCH_TEST_FAIL"

export const testAction = actionNames([
  FETCH_TEST,
  FETCH_TEST_SUCCESS,
  FETCH_TEST_FAIL,
])

export const fetchTestData = createAction(testAction.FETCH_TEST)
export const fetchTestSuccess = createAction(testAction.FETCH_TEST_SUCCESS)
export const fetchTestFail = createAction(testAction.FETCH_TEST_FAIL)
