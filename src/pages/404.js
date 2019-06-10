import React from "react"
import Helmet from 'react-helmet'
import Layout from "../layout"
import SEO from "../components/seo"
import Config from '../data/Config'

const NotFoundPage = () => (
  <Layout>
    <Helmet title={`404 | ${Config.siteTitle}`}/>
    <SEO />
    <div className="container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...or WIP.... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
