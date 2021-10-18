import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import PropTypes from "prop-types"
import { Button } from "@material/react-button"
import "../../index.scss"
const Component = ({
  testDataSelector,
  testLoadingSelector,
  fetchTestData,
}) => {
  useEffect(() => {
    fetchTestData()
  }, [fetchTestData])

  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.testPage.root })

  return (
    <div>
      <Button onClick={handleSwitch}>to test page</Button>
    </div>
  )
}
Component.propTypes = {
  fetchTestData: PropTypes.func,
}

export default Component
