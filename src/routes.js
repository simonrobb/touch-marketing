import React from 'react'
import { Route, IndexRoute, NotFoundRoute } from 'react-router'

import App from './containers/App'
import Index from './containers/Index'
import NotFound from './containers/NotFound'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="*" component={NotFound} />
  </Route>
)

