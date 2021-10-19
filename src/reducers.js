import { combineReducers } from "redux"
import test from  "./pages/SagaStructureComponent/reducers"

const rootReducer = () =>
  combineReducers({
    test,
  })
export default rootReducer
