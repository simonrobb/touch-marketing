import React, { Component } from 'react'
import Header from '../../components/Header'
import styles from './style.css'

class Info extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() {
    return <div>
      <Header />

      <div>
        <section className={styles.block}>
          <div className={styles.content}>
            <h2>Data-driven farming</h2>
            <p className={styles.text}>Real-time data in farming has consistently been shown to bring efficiency increases in water use by up to 30%.</p>
            <p className={styles.text}>We are creating a platform which brings farmers and agronomists real-time visibility into soil moisture, soil temperature, nitrate levels and more. Applying irrigation and fertilizer only when required will save you money and produce a richer crop.</p>
            <p className={styles.text}>Touch Farm is making precision agriculture accessible to farmers everywhere, by offering inexpensive hardware matched with intuitive software.</p>
          </div>
        </section>

        <section className={styles.block}>
          <div className={styles.content}>
            <h2>Quick and easy to start</h2>
            <p className={styles.text}>Purchase Touch Farm hardware from your local distributer or our website, then download our app on your mobile device. You'll be stepped through 5-minute setup and then your sensors will be ready to plant. No third-party contractors required.</p>
            <p className={styles.text}>If you ever need help with your Touch Farm installation, we offer free online support for as long as you need it.</p>
          </div>
        </section>

        <section className={styles.block}>
          <div className={styles.content}>
            <h2>Reliable connectivity</h2>
            <p className={styles.text}>Sensors communicate with the field telemetry station using a low-energy mesh network. Data is then beamed to the base station using long-range LoRaWAN radios (30km range). Mobile data coverage is not required.</p>
            <p className={styles.text}>The base station stores your data in the cloud by connecting to your office wi-fi or ethernet. Any type of internet connection is supported - even dial-up!</p>
            <p className={styles.text}>Patchy internet? Not a problem. Both telemetry stations and the base station store your data until an internet connection can be formed.</p>
          </div>
        </section>

        <section className={styles.block}>
          <div className={styles.content}>
            <h2>Set and forget</h2>
            <p className={styles.text}>Touch Farm sensors are designed to remain buried below the tillage depth for five years. Once installed, you can forget they're even there. Undisturbed soil means your readings are truly representative of your field.</p>
          </div>
        </section>
      </div>

      <div className={styles.moreInfo}>
        <section className={styles.block}>
          <div className={styles.content}>
            <h2>More information</h2>
            <p className={styles.text}>We are building our systems as quickly as we can so that you can begin using Touch Farm technology on your farm.</p>
            <p className={styles.text}>To stay up-to-date with our developments, register your email address. Alternatively, direct any questions you have to <a href="mailto:info@touch.farm">info@touch.farm</a>.</p>

            <p className={styles.text}>
              <button className={styles.button} onClick={() => this.handleRegisterClick()}>Register now</button>
            </p>
          </div>
        </section>
      </div>
    </div>
  }
}

export default Info