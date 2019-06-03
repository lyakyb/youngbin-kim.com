import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ExperienceList from '../components/ExperienceList'

import Config from "../data/Config"
import experiences from "../data/experiences"

const IndexPage = () => (
  <Layout>
    <Helmet title={`${Config.siteTitle} | Home`} />
    <SEO />
    <div className="container brief">
      <h2>Hello! I'm Bin Kim.</h2>
      <p>Welcome to my website!</p>
      <p>I am a student currently enrolled in Mechatronics Engineering at University of Waterloo.</p>
      <p>This website was built to gain familiarity with react/web dev. </p>

      <p>
        {`Powered by Gatsby and Netlify, inspired by `}
        <span>
          <a href="https://www.taniarascia.com/">Tania Rascia</a>
        </span>
      </p>
    </div>
    <div className="container experiences">
      <ExperienceList experiences={experiences} />
    </div>
  </Layout>
)

export default IndexPage
