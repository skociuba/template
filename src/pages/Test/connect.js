import { connect } from "react-redux"
import Test from "./Test"

import { fetchTestData } from "./actions"
import { testDataSelector, testLoadingSelector } from "./selectors"

export const mapStateToProps = (state) => ({
  testData: testDataSelector(state),
  testLoading: testLoadingSelector(state),
})

const mapDispatchToProps = {
  fetchTestData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)
