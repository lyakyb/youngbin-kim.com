import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import Config from '../data/Config'


export default class ExperienceTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <Helmet title={`${post.frontmatter.name} | ${Config.siteTitle}`} />
        <SEO title=""/>
        <div className="container">
          <div className="experience" dangerouslySetInnerHTML={{ __html: post.html }} />
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
