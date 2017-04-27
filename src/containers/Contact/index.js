import React, { Component } from 'react'
import Page from '../../components/Page'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ContentBlock from '../../components/ContentBlock'
import styles from './style.css'

export default class Sensors extends Component {
  render() { 
    return <Page>
      <Header />

      <Content>
        <ContentBlock className={styles.contentBlock}>
          <h2>Get in touch</h2>
          <p>Email at <a href="mailto:info@touch.farm">info@touch.farm</a> or <a href="https://www.facebook.com/touchfarmaus/">visit us on Facebook.</a></p>
        </ContentBlock>
      </Content>

      <Footer />
    </Page>
  }
}