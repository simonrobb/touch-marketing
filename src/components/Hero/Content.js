import React from 'react'
import styles from './style.css'

export default props => {
  return <div className={styles.heroContent}>
    {props.children}
  </div>
}