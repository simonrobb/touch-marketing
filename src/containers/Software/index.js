import React, { Component } from 'react'
import Page from '../../components/Page'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Hero from '../../components/Hero'
import HeroContent from '../../components/Hero/Content'
import Footer from '../../components/Footer'
import styles from './style.css'

class Sensors extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() { 
    return <Page>
      <Header />

      <Content>
        <Hero>
          <HeroContent>
            <h2>Artifical intelligence goes green.</h2>
            <p>Powerful cloud-based analysis can bring incredible insight to your farm. Intelligently predict weather events, control irrigation automously, and more.</p>
          </HeroContent>
        </Hero>
      </Content>

      <Footer />
    </Page>
  }
}

export default Sensors