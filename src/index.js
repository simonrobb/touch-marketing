import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
const history = browserHistory

render(routes)

function render(_routes) {
  ReactDOM.render(
    <Router history={history}>
      <div>{_routes}</div>
    </Router>,
    document.getElementById('root')
  )
}