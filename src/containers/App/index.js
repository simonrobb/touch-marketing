import React from 'react'
import { IndexLink, Link } from 'react-router-dom'
import reset from './reset.css'
import typography from './typography.css'
import grid from './grid.css'
import styles from './style.css'

const App = (props) => {
  return <div>
    {props.children}
  </div>
}

export default App
