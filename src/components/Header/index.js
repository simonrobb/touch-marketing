import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Form/Button'
import classNames from 'classnames'
import styles from './style.css'
import logoDark from './assets/logo-dark.svg'
import logoLight from './assets/logo-light.svg'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      isScrolled: false,
      isLight: !!props.light
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (!this.state.isScrolled && window.scrollY > 0) {
      this.setState({ isScrolled: true });
    }

    else if (this.state.isScrolled && window.scrollY <= 0) {
      this.setState({ isScrolled: false });
    }
  }

  render() {
    const renderLight = this.state.isLight && !this.state.isScrolled;

    const classes = {
      [styles.header]: true,
      [styles.light]: renderLight,
      [styles.scrolled]: this.state.isScrolled,
      [this.props.className]: !!this.props.className
    };

    return <div className={classNames(classes)}>
      <section className={styles.container}>
        <NavLink to="/" className={styles.left} activeClassName={styles.active}><img src={renderLight ? logoLight : logoDark} className={styles.logo} alt="Touch Farm" /></NavLink>
        <NavLink to="/sensors" exact className={styles.link} activeClassName={styles.active} title="Sensors">Sensors</NavLink>
        <NavLink to="/software" exact className={styles.link} activeClassName={styles.active} title="Software">Software</NavLink>
        <a href="https://medium.com/@touchfarm/latest" className={classNames({[styles.link]: true, [styles.blogLink]: true})}>Blog</a>
        {/*<NavLink to="/login" exact className={styles.button}>
          <Button size="small" color={renderLight ? 'light' : 'primary'} outline={true}>Login</Button>
        </NavLink>*/}
      </section>
    </div>;
  }
}