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
        <h2>We believe in a fertile future for agriculture.</h2>
        <p>The farm of the future will utilise technology to grow more, with less. We want to create that future.</p>
      </Hero>

      <ContentBlock>
        <h2>Company</h2>
        <p>Touch Farm is an agricultural technology company based in Melbourne, Australia.</p>
      </ContentBlock>

      <ContentBlock>
        <h2>Our Team</h2>
        <p>We are an experienced, passionate group of hackers and thinkers.</p>
        <p>No matter if you are a farmer, engineer or something else, we are always looking for talented people. If you think you can bring something special to the team, drop us an email at <a href="mailto:info@touch.farm">info@touch.farm</a>.</p>
      </ContentBlock>

      <Footer />
    </div>
  }
}

export default Sensors