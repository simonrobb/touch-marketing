import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

export default props => {
  const {
    color,
    size,
    outline
  } = props;

  const classes = {
    [styles.button]: true,
    [styles[size]]: !!styles[size],
    [styles[color]]: !!styles[color],
    [styles.outline]: outline
  };

  return <button className={classNames(classes)}>
    {props.children}
  </button>;
}