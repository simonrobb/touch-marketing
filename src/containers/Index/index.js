import React, { Component } from 'react'
import Header from '../../components/Header'
import styles from './style.css'

class Index extends Component {
  handleRegisterClick() {
    openPopup()
  }

  render() {
    return <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.topGradient} />
      <div className={styles.bottomGradient} />

      <div className={styles.content}>
        <div>
          <section>
            <div className={styles.text}>
              <p className={styles.pitch}>Monitor farm metrics in real time from anywhere.</p>
              <p className={styles.explain}>Our soil and atmospheric sensors are perfectly paired with intuitive software. Tend your crop precisely and efficiently.</p>

              <div className={styles.register}>
                <p className={styles.instruction}>Touch Farm is currently developing an inexpensive soil sensing solution for progressive farmers. You can register for updates and early entry to our testing programme by providing your email address.</p>
                <button className={styles.button} onClick={() => this.handleRegisterClick()}>Register now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  }
}

export default Index