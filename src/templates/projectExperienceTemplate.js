import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../components/seo"
import Config from "../data/Config"
import projects from "../data/projectExperiences"

export default class ProjectExperienceTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const experience = projects.find(exp => exp.name === post.frontmatter.name)

    if (!experience) {
      return (
        <Layout>
          <Helmet title={`Awkward... | ${Config.siteTitle}`} />
          <SEO title="" />
          <div className="container">
            <p>Looks like I didn't update either my data or markdown files.....</p>
            <p>My apologies :P</p>
          </div>
        </Layout>
      )
    }

    const { name } = experience

    return (
      <Layout>
        <Helmet title={`${post.frontmatter.name} | ${Config.siteTitle}`} />
        <SEO title="" />
        <div className="container">
          <div className="header">{name}</div>
          <div
            className="experience"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const projectExperienceQuery = graphql`
  query ProjectExpeirenceBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        template
        name
      }
      fields {
        slug
      }
    }
  }
`
