import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import Contact from '../components/Contact'
import SEO from '../components/seo'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title='Contact'/>
        <SEO/>
        <div className="container">
          <Contact/>
        </div>
      </Layout>
    )
  }
}