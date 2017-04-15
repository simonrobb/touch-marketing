import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './style.css'

class Sensors extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() { 
    return <div>
      <Header light={true} />
      <Hero className={styles.hero}>
        <h2>Soil moisture sensors so easy you’ll forget about them.</h2>
        <p>Rugged, wireless sensors that work everywhere, and no maintenence required. Perfectly paired with intuitive software.</p>
      </Hero>
    </div>
  }
}

export default Sensors