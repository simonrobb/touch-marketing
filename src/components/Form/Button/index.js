import React from 'react'
import classNames from 'classnames'
import styles from './style.css'

export default props => {
  let {
    color,
    size,
    outline
  } = props;

  size = size || 'medium';
  color = color || 'default';

  const classes = {
    [props.className]: !!props.className,
    [styles.button]: true,
    [styles[size]]: !!styles[size],
    [styles[color]]: !!styles[color],
    [styles.outline]: outline
  };

  const attrs = {
    className: classNames(classes),
    onClick: props.onClick
  }

  return <button {...attrs}>
    {props.children}
  </button>;
}