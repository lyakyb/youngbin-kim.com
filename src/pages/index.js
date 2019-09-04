import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import SEO from "../components/seo"
import ExperienceList from '../components/ExperienceList'

import Config from "../data/Config"

const IndexPage = () => (
  <Layout>
    <Helmet title={`Home | ${Config.siteTitle}`}/>
    <SEO />
    <div className="container brief">
      <h1>Hello! I'm Bin Kim.</h1>
      <p>Welcome to my website!</p>
      <p>I am currently studying Mechatronics Engineering at University of Waterloo.</p>
      <p>This website was built to gain familiarity with react/web dev. </p>
      <p>
        {`Powered by Gatsby and Netlify, inspired by `}
        <span>
          <a href="https://www.taniarascia.com/">Tania Rascia</a>
        </span>
      </p>
    </div>
    <div className="container experiences">
      <h2>Experiences</h2>
      <ExperienceList />
    </div>
  </Layout>
)

export default IndexPage
