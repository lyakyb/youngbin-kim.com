import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
import TimeLine from '../components/TimeLine'


export default class PageTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext
    const post = this.props.data.markdownRemark
    
    return (
      <Layout>
        <Helmet title="LOL"/>
        <SEO />
        <div className="container">
          <div className="page" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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