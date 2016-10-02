import React from 'react'
import { IndexLink, Link } from 'react-router'
import reset from './reset.css'
import typography from './typography.css'
import grid from './grid.css'
import styles from './style.css'
import logo from './assets/Logo.svg'

const App = (props) => {
  return <div>
    <section className={styles.header}>
      <img src={logo} alt="Touch Farm" />
    </section>

    <section>
      {props.children}
    </section>
  </div>
}

export default App
