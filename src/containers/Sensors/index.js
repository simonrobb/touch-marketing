import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Hero from '../../components/Hero'
import HeroContent from '../../components/Hero/Content'
import HeroImage from '../../components/Hero/Image'
import Footer from '../../components/Footer'
import ContentBlock from '../../components/ContentBlock'
import Button from '../../components/Form/Button'
import RegisterModal from '../../components/RegisterModal'
import styles from './style.css'
import sensor from './assets/sensor@2x.png'

class Sensors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegisterOpen: false
    };
  }
  handleRegisterClick() {
    this.setState({ isRegisterOpen: true });
  }

  handleRegisterClose() {
    this.setState({ isRegisterOpen: false });
  }

  render() { 
    return <Page>
      <Header />

      <Content>
        <Hero>
          <HeroContent>
            <h2>Soil moisture sensors so easy you’ll forget about them.</h2>
            <p>Rugged, wireless sensors that work everywhere, and no maintenence required. Perfectly paired with intuitive software.</p>
          </HeroContent>

          <HeroImage>
            <img className={styles.sensor} src={sensor} alt="Touch Farm soil sensor" />
          </HeroImage>
        </Hero>

        <ContentBlock>
          <h2>Rugged design</h2>
          <p>Touch sensors are designed to stick out the toughest conditions. Thick UV-resistant plastic keeps sensitive components safe and stable season after season.</p>
          <p>We’ve built a sensor which can be left in the ground for years at a time. It's resistant to wheels and hooves, able to bear the weight of a fully-laden harvester overhead. We want farmers to spend their time where they’re needed most, not maintaining their sensors.</p>
        </ContentBlock>

        <ContentBlock>
          <h2>Wireless without mobile</h2>
          <p>Touch sensors are entirely self-contained.</p>
          <p>Solar panels are integrated into the sensor; at ground level they'll never get in the way of your operations. They'll keep your sensors running indefinitely.</p>
          <p>No mobile coverage? No problem. Sensors in the field use long-range radio to communicate with a small base station back home. This uses your farm wifi or ethernet to transmit sensor data to the cloud.</p>
        </ContentBlock>

        <ContentBlock>
          <h2>Easy to use</h2>
          <p>Touch Farm sensors are ready to use our software out-of-the-box. Monitor your farm in real time, from anywhere.</p>

          <div className={styles.buttons}>
            <Link to="/software" className={styles.button}>
              <Button>Learn more</Button>
            </Link>
            <Button className={styles.button} color="secondary" onClick={() => this.handleRegisterClick()}>Register</Button>
          </div>
        </ContentBlock>
      </Content>

      <RegisterModal isOpen={this.state.isRegisterOpen} onClose={() => this.handleRegisterClose()} />

      <Footer />
    </Page>
  }
}

export default Sensors