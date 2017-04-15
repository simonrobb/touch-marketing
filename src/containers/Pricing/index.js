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
      <Header />
      <Hero>
        <h2>Artifical intelligence goes green.</h2>
        <p>Powerful cloud-based analysis can bring incredible insight to your farm. Intelligently predict weather events, control irrigation automously, and more.</p>
      </Hero>

      {false ? <div>
        <section className={styles.block}>
          <div className={styles.content}>
            <h2>Data-driven farming</h2>
            <p className={styles.text}>Informed decision making is key to maximising crop yield and minimising wastage.</p> 
            <p className={styles.text}>Touch Farm is making precision agriculture accessible to farmers everywhere, by offering inexpensive hardware matched with intuitive software. Gain insight into the state of your soil in real-time. Deploy a sensor grid over your fields for a picture that is truly representative of your soil's behaviour.</p>
            <p className={styles.text}>Accurate data allows informed decision-making &ndash; which brings bigger profits to your farm.</p>
          </div>
        </section> 
      </div> : false}
    </div>
  }
}

export default Sensors