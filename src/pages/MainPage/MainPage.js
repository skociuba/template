import React from "react"
import { useHistory } from "react-router-dom"
import { shared } from "../../sharedConstants"
import { Button } from "@material/react-button"
import ThemeSwitcher from "../../components/themeSwitcher/themeSwitcher"
import "../../index.scss"
import { button } from "./MainPage.style"
const MainPage = () => {
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

export default MainPage
