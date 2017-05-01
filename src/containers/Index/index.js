import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import HeroContent from '../../components/Hero/Content'
import Footer from '../../components/Footer'
import Button from '../../components/Form/Button'
import RegisterModal from '../../components/RegisterModal'
import styles from './style.css'

class Index extends Component {
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
    return <div>
      <Header transparent={true} light={true} className={styles.header} />
      <div className={styles.hero}>
        <Hero fullscreen={true}>
          <HeroContent>
            <h2>Touch Farm helps you farm more efficiently.</h2>
            <p>Our soil moisture sensors improve the bottom line of broadacre, horticulture and cattle farms. Make confident decisions with the help of real-time data from your fields.</p>

            <div className={styles.buttons}> 
              <Link to="/sensors"><Button size="large" color="default">Learn more</Button></Link>
              <Button size="large" color="secondary" onClick={() => this.handleRegisterClick()}>I'm interested</Button>
            </div>
          </HeroContent>
        </Hero>
      </div>

      <RegisterModal isOpen={this.state.isRegisterOpen} onClose={() => this.handleRegisterClose()} />

      <Footer />
    </div>
  }
}

export default Index