import React from 'react'
import styles from './style.css'

export default props => {
  const sectionAttrs = {
    className: props.className
  };

  return <section {...sectionAttrs}>
    <div className={styles.container}>
      {props.children}
    </div>
  </section>
}