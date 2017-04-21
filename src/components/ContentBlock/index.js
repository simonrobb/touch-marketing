import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

export default props => {
  const classes = {
    [props.className]: !!props.className,
    [styles.container]: true
  };

  return <section className={classNames(classes)}>
    <div className={styles.content}>
      {props.children}
    </div>
  </section>
}