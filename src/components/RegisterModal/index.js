import React, { Component } from 'react'
import ReactModal from 'react-modal'
import axios from 'axios'
import classNames from 'classnames'
import Button from '../Form/Button'
import styles from './style.css'

export default class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      status: ''
    };
  }

  handleRegisterClick() {
    // Update UI
    this.setState({ status: '' })

    // Construct the body of the subscription request
    const body = {
      emailAddress: 'simon+1@touch.farm',
      firstName: 'Simon',
      lastName: 'Robb'
    }

    // Perform the request
    axios
      .post('http://localhost:8080/subscriptions', body)
      .then(response => this.handleRegisterSuccess(response.data))
  }

  handleCloseClick() {
    this.setState({ visible: false });
    setTimeout(() => this.modalDidHide(), 400);
  }

  handleRegisterSuccess(data) {
    this.setState({ status: data.message })
  }

  modalDidHide() {
    this.props.onClose();
  }

  onAfterOpen() {
    this.setState({ visible: true });
  }

  render() {
    const modalClasses = {
      [styles.modal]: true,
      [styles.visible]: !!this.state.visible
    };

    const statusEl = !!this.state.status ? <p>{this.state.status}</p> : null;

    return <ReactModal 
      {...this.props} 
      contentLabel="Register" 
      className={classNames(modalClasses)}
      overlayClassName={styles.overlay}
      onAfterOpen={() => this.onAfterOpen()}
    >
      <section>
        <div className={styles.form}>
          {statusEl}
          <div className={styles.buttons}>
            <Button size="large" color="default" className={styles.button} onClick={() => this.handleCloseClick()}>Cancel</Button>
            <Button size="large" color="primary" className={styles.button} onClick={() => this.handleRegisterClick()}>Register</Button>
          </div>
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