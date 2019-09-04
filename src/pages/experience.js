import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/seo'
import Config from '../data/Config'


export default class ExperiencePage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    debugger
    console.log(post)
    return (
      <Layout>
        <Helmet title={`${post.fields.title} | ${Config.siteTitle}`} />
        <SEO title=""/>
        <div className="container">
          <div className="page experience" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}
