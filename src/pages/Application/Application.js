import React, { Suspense } from "react"
import { HashRouter as Switch } from "react-router-dom"
import routes, { RouteWithSubRoutes } from "../../routes.config"

const Application = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Suspense>
  )
}

Application.defaultProps = {}

export default Application
