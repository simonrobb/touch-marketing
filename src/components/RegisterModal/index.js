import React, { Component } from 'react'
import ReactModal from 'react-modal'
import classNames from 'classnames'
import Button from '../Form/Button'
import styles from './style.css'

export default class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleClose() {
    this.setState({ visible: false });
    setTimeout(() => this.modalDidHide(), 400);
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

    return <ReactModal 
      {...this.props} 
      contentLabel="Register" 
      className={classNames(modalClasses)}
      overlayClassName={styles.overlay}
      onAfterOpen={() => this.onAfterOpen()}
    >
      <section>
        <div className={styles.form}>
          <div className={styles.buttons}>
            <Button size="large" color="default" className={styles.button} onClick={() => this.handleClose()}>Cancel</Button>
            <Button size="large" color="primary" className={styles.button} onClick={() => this.handleClose()}>Register</Button>
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