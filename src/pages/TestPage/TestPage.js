import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import { Button } from "@material/react-button"
import ThemeSwitcher from "../../components/themeSwitcher/themeSwitcher"
import "../../index.scss"
import { button } from "./TestPage.style"
const TestPage = () => {
  const history = useHistory()

  const handleSwitch = () =>
    history.push({ pathname: shared.routes.newPage.root })
  const name = "Barbara"
  return (
    <ThemeSwitcher>
      <Button className={button} onClick={handleSwitch}>
        to new page
      </Button>
      {`hello ${name}!`}
      <br />
      <div>another component</div>
    </ThemeSwitcher>
  )
}

export default TestPage
