import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

export default props => {
  const heroClasses = {
    [styles.hero]: true,
    [styles.fullscreen]: !!props.fullscreen,
    [props.className]: !!props.className
  }

  return <section className={classNames(heroClasses)}>
    {props.children}
  </section>
}