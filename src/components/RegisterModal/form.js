import React, { Component } from 'react'
import { Form, Text } from 'react-form'
import Button from '../Form/Button'
import styles from './style.css'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(values) {
    this.props.onSubmit(values)
  }

  handleCancel() {
    this.props.onCancel()
  }

  validate(values) {
    return { 
      firstName: !values.firstName ? 'Please enter your first name' : undefined,
      lastName: !values.lastName ? 'Please enter your last name' : undefined,
      emailAddress: !values.emailAddress ? 'Please enter your email address' : undefined,
    }
  }

  render() {
    const statusEl = !!this.props.status ? <div className={styles.row}>
      <p>{this.props.status}</p>
    </div> : null;

    return <Form 
      onSubmit={values => this.handleSubmit(values)}
      validate={values => this.validate(values)}
    >
      {({ submitForm }) => (
        <form 
          className={styles.form}
          onSubmit={submitForm}
        >
          <div className={styles.row}>
            <label>Name:</label>
            <div className={styles.controls}>
              <Text field="firstName" placeholder="John" className={styles.control} />
              <Text field="lastName" placeholder="Smith" className={styles.control} />
            </div>
          </div>

          <div className={styles.row}>
            <label>Email address:</label>
            <div className={styles.controls}>
              <Text field="emailAddress" placeholder="john@gmail.com" className={styles.control} />
            </div>
          </div>

          {statusEl}

          <div className={styles.row}>
            <div className={styles.controls}>
              <Button type="button" size="large" color="default" className={styles.button} onClick={() => this.handleCancel()}>Cancel</Button>
              <Button type="submit" size="large" color="primary" className={styles.button}>Register</Button>
            </div>
          </div>
        </form>
      )}
    </Form>
  }
}