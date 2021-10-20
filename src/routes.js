import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import Application from "./pages/Application/Application"
import store from "./store"

const Routing = () => (
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Router>
  </Provider>
)

export default Routing
