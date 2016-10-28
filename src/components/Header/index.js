import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import styles from './style.css'
import logo from './assets/Logo.svg'

const Header = (props) => {
  const classes = {
    [styles.container]: true,
    [styles.transparent]: !!props.transparent,
    [props.className]: !!props.className
  }

  return <div className={classNames(classes)}>
    <section className={styles.header}>
      <img src={logo} alt="Touch Farm" />
    </section>
  </div>
}

export default Header
