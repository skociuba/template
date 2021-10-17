import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import { Button } from "@material/react-button"
import "../../index.scss"
const Component = () => {
  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.testPage.root })
  const name = "Seba"
  return (
    <div>
      <Button onClick={handleSwitch}>to test page</Button>
      {`hello ${name}!`}
    </div>
  )
}

export default Component
