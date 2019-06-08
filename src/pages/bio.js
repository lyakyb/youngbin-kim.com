import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import Timeline from '../components/Timeline'


export default class BioPage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <Helmet title="LOL"/>
        <SEO />
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