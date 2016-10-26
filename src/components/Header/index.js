import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './style.css'
import logo from './assets/Logo.svg'

const Header = (props) => {
  return <div className={props.className}>
    <section className={styles.header}>
      <img src={logo} alt="Touch Farm" />
    </section>
  </div>
}

export default Header
