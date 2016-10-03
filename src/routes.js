import React from 'react'
import { Route, IndexRoute, NotFoundRoute } from 'react-router'

import App from './containers/App'
import Index from './containers/Index'
import Login from './containers/Auth/Login'
import NotFound from './containers/NotFound'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
)

