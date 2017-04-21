import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ContentBlock from '../../components/ContentBlock'
import styles from './style.css'

class Sensors extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() { 
    return <div>
      <Header />
      <Hero>
        <h2>We believe in the future of agriculture.</h2>
        <p>The farm of the future will utilise technology to grow more, with less. We want to create that future.</p>
      </Hero>

      <ContentBlock>
        <h2>Our Team</h2>
        <p>We are an experienced, passionate group of hackers and thinkers.</p>
      </ContentBlock>

      <Footer />
    </div>
  }
}

export default Sensors