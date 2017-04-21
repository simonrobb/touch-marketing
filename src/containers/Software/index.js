import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import styles from './style.css'

class Sensors extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() { 
    return <div>
      <Header />
      <Hero>
        <h2>Artifical intelligence goes green.</h2>
        <p>Powerful cloud-based analysis can bring incredible insight to your farm. Intelligently predict weather events, control irrigation automously, and more.</p>
      </Hero>

      <Footer />
    </div>
  }
}

export default Sensors