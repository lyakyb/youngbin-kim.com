const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(fileNode)
    console.log(path.parse(fileNode.relativePath))
    slug = createFilePath({ node, getNode, basePath: `markdowns`})
    console.log(slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/pageTemplate.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    template
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.template === 'page') {
            createPage({
              path: edge.node.fields.slug,
              component: pageTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            })
          }
        });
      })
    )
  })
}