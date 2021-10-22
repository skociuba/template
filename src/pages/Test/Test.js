import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import PropTypes from "prop-types"
import { Button } from "@material/react-button"
import "../../index.scss"
const Test = ({ testData, testLoading, fetchTestData }) => {
  useEffect(() => {
    fetchTestData()
  }, [fetchTestData])
  console.log(fetchTestData())
  console.log(testData)
  console.log(testLoading)

  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.testPage.root })

  return (
    <div>
      <Button onClick={handleSwitch}>to test page</Button>
    </div>
  )
}
Test.defaultProps = {
  fetchTestData: () => {},
}

Test.propTypes = {
  fetchTestData: PropTypes.func,
}

export default Test
