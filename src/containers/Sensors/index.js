import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import ContentBlock from '../../components/ContentBlock'
import styles from './style.css'

class Sensors extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() { 
    return <div className={styles.page}>
      <Header light={true} />
      <Hero>
        <h2>Soil moisture sensors so easy you’ll forget about them.</h2>
        <p>Rugged, wireless sensors that work everywhere, and no maintenence required. Perfectly paired with intuitive software.</p>
      </Hero>

      <ContentBlock>
        <h2>Rugged design</h2>
        <p>Touch sensors are designed to stick out the toughest conditions. Thick UV-resistant plastic keeps sensitive components safe and stable season after season.</p>
        <p>We’ve built a sensor which can be left in the ground for years at a time. The Touch is resistant to wheels and hooves, able to bear the weight of a fully-laden harvester overhead. We want farmers to spend their time where they’re needed most, not maintaining their sensors.</p>
      </ContentBlock>

      <ContentBlock>
        <h2>Wireless without mobile</h2>
        <p>Touch sensors are entirely self-contained.</p>
      </ContentBlock>

      <Footer light={true} />
    </div>
  }
}

export default Sensors