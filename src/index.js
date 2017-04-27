import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router 
} from 'react-router-dom'
import ScrollToTop from './components/Utility/ScrollToTop'

import routes from './routes'
render(routes)

function render(_routes) {
  ReactDOM.render(
    <Router>
      <ScrollToTop>
        <div>{_routes}</div>
      </ScrollToTop>
    </Router>,
    document.getElementById('root')
  )
}