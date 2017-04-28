import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Button from '../Form/Button'
import styles from './style.css'

export default class RegisterModal extends Component {

  handleClose() {
    this.props.onClose()
  }

  render() {
    return <ReactModal 
      {...this.props} 
      contentLabel="Register" 
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <section>
        <div className={styles.form}>
          <Button size="large" color="default" onClick={() => this.handleClose()}>Cancel</Button>
          <Button size="large" color="primary" onClick={() => this.handleClose()}>Register</Button>
        </div>

        <div className={styles.text}>
          <h2>Stay updated by registering your interest.</h2>
          <p>Thank you for your interest. We are currently testing our technology before beginning production.</p>
          <p>If you would like to receive occasional emails about our sensors, please leave your name and email address.</p>
        </div>
      </section>
    </ReactModal>
  }
}