import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Hero from '../../components/Hero'
import HeroContent from '../../components/Hero/Content'
import HeroImage from '../../components/Hero/Image'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Form/Button'
import Footer from '../../components/Footer'
import styles from './style.css'
import screenshot from './assets/screenshot@2x.png'

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
            <h2>Your field in your pocket.</h2>
            <p>Monitor your farm on your smartphone, and quickly get insights into your crop.</p>
          </HeroContent>

          <HeroImage>
            <img className={styles.screenshot} src={screenshot} alt="Touch Farm iPhone app" />
          </HeroImage>
        </Hero>

        <ContentBlock>
          <h2>Top-down view</h2>
          <p>Sensor data is presented over a satellite view of your farm. It's difficult to imagine how sensor readings at specific points might represent the behaviour of your entire field, so we generate a heatmap you can understand at a glance.</p>
        </ContentBlock>

        <ContentBlock>
          <h2>Easy to use</h2>
          <p>The app is designed to get you the information you need, as quickly and easily as possible. We collaborate closely with farmers, so we can build a service they love to use.</p>
        </ContentBlock>

        <ContentBlock>
          <h2>Integrated with sensors</h2>
          <p>View your sensors' battery level, location and more.</p>
          <p>Touch Farm sensors work with our app from the moment you purchase them. The app will guide you through a simple setup process and you'll be ready to start taking readings in no time.</p>

          <div className={styles.buttons}>
            <Link to="/sensors" className={styles.button}>
              <Button>Learn more</Button>
            </Link>
            <Button className={styles.button} color="secondary" onClick={() => this.handleRegisterClick()}>Register</Button>
          </div>
        </ContentBlock>
      </Content>

      <Footer />
    </Page>
  }
}

export default Sensors