import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
const TestPage = () => {
  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.newPage.root })
  const name = "Barbara"
  return (
    <div>
      {`hello ${name}!`} <button onClick={handleSwitch}>click</button>
    </div>
  )
}

export default TestPage
