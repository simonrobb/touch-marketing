import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './style.css';

export default props => {
  const classes = {
    [styles.container]: true,
    [styles.light]: !!props.light
  };

  return <section className={classNames(classes)}>
    <div className={styles.companyLinks}>
      <h4>Company</h4>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><a href="https://medium.com/@touchfarm/latest">Blog</a></li>
      </ul>
    </div>

    <div className={styles.productLinks}>
      <h4>Product</h4>
      <ul>
        <li><NavLink to="/sensors">Sensors</NavLink></li>
        <li><NavLink to="/software">Software</NavLink></li>
      </ul>
    </div>

    <div className={styles.info}>
      <h4>Who are Touch Farm?</h4>
      <p className={styles.blurb}>We are a data analytics company based in Melbourne, Australia. We are committed to furthering agricultural technology, for the benefit of farmers and broader society.</p>
      <p className={styles.copyright}>Copyright &copy; 2017 Touch Farm</p>
    </div>
  </section>
}