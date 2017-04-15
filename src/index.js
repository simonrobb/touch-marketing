import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router 
} from 'react-router-dom'

import routes from './routes'
render(routes)

function render(_routes) {
  ReactDOM.render(
    <Router>
      <div>{_routes}</div>
    </Router>,
    document.getElementById('root')
  )
}