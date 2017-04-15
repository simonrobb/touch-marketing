import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

class NotFound extends Component {
  render() {
    return <div>
      <Header />
      <Hero>
        <h2>Not Found</h2>
        <p>The page you requested couldn't be found.</p>
      </Hero>
    </div>
  }
}

export default NotFound