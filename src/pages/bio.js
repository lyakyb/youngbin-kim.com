import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import Timeline from '../components/Timeline'
import Config from '../data/Config'


export default class BioPage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <Helmet title={`Bio | ${Config.siteTitle}`} />
        <SEO title=""/>
        <div className="container">
          <div className="page" dangerouslySetInnerHTML={{ __html: post.html }} />
          <h2 className="timeline-header">Timeline (for the giggles)</h2>
          <Timeline />
        </div>
      </Layout>
    )
  }
}

export const bioQuery = graphql`
  query BioQuery {
    markdownRemark(fields: { slug: { eq: "/bio/" } }) {
      html
      frontmatter {
        title
        template
      }
      fields {
        slug
      }
    }
  }
`
