import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Form/Button'
import classNames from 'classnames'
import styles from './style.css'
import logo from './assets/Logo.svg'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: !!props.light
    };
  }

  render() {
    const classes = {
      [styles.header]: true,
      [styles.light]: this.state.isLight,
      [this.props.className]: !!this.props.className
    };

    return <div className={classNames(classes)}>
      <section className={styles.container}> 
        <NavLink to="/" className={styles.left} activeClassName={styles.active}></NavLink>
        <NavLink to="/sensors" exact className={styles.link} activeClassName={styles.active} title="Sensors">Sensors</NavLink>
        <NavLink to="/software" exact className={styles.link} activeClassName={styles.active} title="Software">Software</NavLink>
        <NavLink to="/ai" exact className={styles.link} activeClassName={styles.active} title="AI">AI</NavLink>
        <NavLink to="/pricing" exact className={styles.link} activeClassName={styles.active} title="Pricing">Pricing</NavLink>
        <NavLink to="/" exact className={styles.link}>Blog</NavLink>
        <NavLink to="/login" exact className={styles.button}>
          <Button size="small" color={this.state.isLight ? 'light' : 'primary'} outline={true}>Login</Button>
        </NavLink>
      </section>
    </div>;
  }
}