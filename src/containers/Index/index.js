import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Button from '../../components/Form/Button'
import styles from './style.css'

class Index extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() {
    return <div className={styles.container}>
      <Header transparent={true} light={true} className={styles.header} />
      <Hero className={styles.hero}>
        <h2>Touch Farm helps you farm more efficiently.</h2>
        <p>Our soil moisture sensors improve the bottom line of broadacre, horticulture and cattle farms. Make confident decisions with the help of real-time data from your fields.</p>

        <div className={styles.buttons}> 
          <Link to="/sensors"><Button size="large" color="secondary">Learn more</Button></Link>
          <Button size="large" color="default">Register</Button>
        </div>
      </Hero>

      <Footer />
    </div>
  }
}

export default Index