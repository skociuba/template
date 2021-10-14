import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
const NewPage = () => {
  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.testPage.root })
  const name = "Seba"
  return (
    <div>
      {`hello ${name}!`}
      <button onClick={handleSwitch}>click</button>
    </div>
  )
}

export default NewPage
