import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount () {
    axios
      .get('http://localhost:8080/auth/me')
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      })
  }

  handleSubmit(event) {
    event.preventDefault()

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('http://localhost:8080/auth/login', data)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      })
  }

  handleFieldChange(name, event) {
    const value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    return <form onSubmit={event => this.handleSubmit(event)}>
      <div>
        <label>Email address</label>
        <input type="text" value={this.state.email} onChange={event => this.handleFieldChange('email', event)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={event => this.handleFieldChange('password', event)} />
      </div>

      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  }
}

export default Login