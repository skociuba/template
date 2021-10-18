import { connect } from "react-redux"
import Component from "./Component"

import { fetchTestData } from "./action"
import { testDataSelector, testLoadingSelector } from "./selectors"

export const mapStateToProps = (state) => ({
  testData: testDataSelector(state),
  testLoading: testLoadingSelector(state),
})

const mapDispatchToProps = {
  fetchTestData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)
