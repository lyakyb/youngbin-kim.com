import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import SEO from "../components/seo"
import Experiences from '../components/Experiences'
import Config from "../data/Config"

const ExperiencesPage = () => (
  <Layout>
    <Helmet title={`Experiences | ${Config.siteTitle}`}/>
    <SEO />
    <div className="container">
      <h2>Here is a list of some experiences I had in the past</h2>
      <Experiences/>
    </div>
  </Layout>
)

export default ExperiencesPage
