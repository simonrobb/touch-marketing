import React, { Component } from 'react'
import ReactModal from 'react-modal'
import axios from 'axios'
import classNames from 'classnames'
import RegisterForm from './form.js'
import Button from '../Form/Button'
import styles from './style.css'

export default class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      complete: false,
      status: ''
    };
  }

  handleSubmit(values) {
    // Update UI
    this.setState({ status: '' })

    // TODO: point at production api, when we have one
    // Perform the request
    axios
      .post('http://staging.api.touch.farm/v1/subscriptions', values)
      .then(response => this.handleRegisterSuccess(response.data))
      .catch(error => this.handleRegisterError(error.response))
  }

  handleCancel() {
    this.setState({ visible: false });
    setTimeout(() => this.modalDidHide(), 400);
  }

  handleRegisterSuccess(data) {
    this.setState({ complete: true })

    // Facebook ad tracking
    fbq('track', 'Lead', {})
  }

  handleRegisterError(error) {
    this.setState({ status: error.data.message })
  }

  modalDidHide() {
    this.props.onClose();
  }

  onAfterOpen() {
    this.setState({ visible: true, complete: false });
  }

  render() {
    const modalClasses = {
      [styles.modal]: true,
      [styles.visible]: !!this.state.visible
    };

    const confirmationEl = <section>
      <div className={styles.confirmation}>
        <h2>Thank you!</h2>
        <p>Your email address has been added.</p>
        <div className={styles.buttons}>
          <Button 
            className={styles.button}
            type="button" 
            color="default" 
            size="large" 
            onClick={() => this.handleCancel()}>Close</Button>
        </div>
      </div>
    </section>

    const registerEl = <section>
      <div className={styles.registerForm}>
        <RegisterForm 
          status={this.state.status} 
          onSubmit={values => this.handleSubmit(values)} 
          onCancel={() => this.handleCancel()} />
      </div>

      <div className={styles.text}>
        <h2>Stay updated by registering your interest.</h2>
        <p>Thank you for your interest. We are currently testing our technology before beginning production.</p>
        <p>If you would like to receive occasional emails about our sensors, please leave your name and email address.</p>
      </div>
    </section>

    return <ReactModal 
      {...this.props} 
      contentLabel="Register" 
      className={classNames(modalClasses)}
      overlayClassName={styles.overlay}
      onAfterOpen={() => this.onAfterOpen()}
    >
      { !this.state.complete ? registerEl : confirmationEl }
    </ReactModal>
  }
}