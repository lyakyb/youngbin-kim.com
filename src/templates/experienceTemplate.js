import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../components/seo"
import Config from "../data/Config"
import workExperiences from "../data/workExperiences"

export default class ExperienceTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const experience = workExperiences.find(
      exp => exp.company === post.frontmatter.name
    )

    const { startDate, endDate, position, company, techStack, location } = experience

    return (
      <Layout>
        <Helmet title={`${post.frontmatter.name} | ${Config.siteTitle}`} />
        <SEO title="" />
        <div className="container">
          <div className="header">{company}</div>
          <div className="subheader">
            {position}
            <span className="time">{` (${startDate} ~ ${endDate}) - ${location}`}</span>
          </div>
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
export const experienceQuery = graphql`
  query ExpeirenceBySlug($slug: String!) {
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
