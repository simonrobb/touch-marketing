import React from 'react'
import { Switch, Route } from 'react-router'

import App from './containers/App'
import Index from './containers/Index'
import Sensors from './containers/Sensors'
import Software from './containers/Software'
import About from './containers/About'
import Login from './containers/Auth/Login'
import NotFound from './containers/NotFound'

export default (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/sensors" component={Sensors} />
    <Route path="/software" component={Software} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

