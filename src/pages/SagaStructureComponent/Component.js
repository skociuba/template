import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import PropTypes from "prop-types"
import { Button } from "@material/react-button"
import "../../index.scss"
const Component = ({ testData, testLoading, fetchTestData }) => {
  useEffect(() => {
    fetchTestData()
  }, [fetchTestData])

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
Component.defaultProps = {
  fetchTestData: () => {},
}

Component.propTypes = {
  fetchTestData: PropTypes.func,
}

export default Component
