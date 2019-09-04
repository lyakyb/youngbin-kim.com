import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import SEO from "../components/seo"
import ExperienceList from '../components/ExperienceList'
import Clips from "../components/Clips"
import Config from "../data/Config"

const ClipsPage = () => (
  <Layout>
    <Helmet title={`Clips | ${Config.siteTitle}`}/>
    <SEO />
    <div className="container">
      <Clips/>
    </div>
  </Layout>
)

export default ClipsPage
