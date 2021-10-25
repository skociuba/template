import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import { Button } from "@material/react-button"

import "../../index.scss"
import {} from "./MainPage.style"
const MainPage = () => {
  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.newPage.root })

  return (
    <>
      <div>MAIN PAGE</div>
      <Button onClick={handleSwitch}>to next page</Button>
    </>
  )
}

export default MainPage
