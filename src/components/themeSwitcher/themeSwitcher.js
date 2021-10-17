import React, { useState } from "react"
import Switch from "@material/react-switch"
import "../../index.scss"

import { backgroundBlack, backgroundWhite } from "./themeSwitcher.style"

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState(backgroundBlack)

  const handleChange = () => {
    if (theme !== backgroundWhite) {
      setTheme(backgroundWhite)
    } else {
      setTheme(backgroundBlack)
    }
  }

  return (
    <div className={theme}>
      <Switch onChange={handleChange} />
      {children}
    </div>
  )
}

export default ThemeSwitcher
