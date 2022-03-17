// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/",
//     component: require.resolve("./src/templates/index-template.js"),
//     context: {},
//   })
// }

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// onCreateNode fires before createPages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Slug creation
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `markdown` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // By using allFile instead of allMarkdownRemark you can 
  // add multiple gatsby-source-filesystem plugins
  // that source markdown files but will NOT be used for 
  // creating pages. Only markdown files with the source instance name
  // "markdown" will be created as pages
  // Use case is eg. global site data entered through NetlifyCMS
  // stored in Markdown files
  return new Promise((resolve, reject) => {
    const result = graphql(`
      {
        allFile(filter: {sourceInstanceName: {eq: "markdown"}, internal: {mediaType: {eq: "text/markdown"}}}) {
          edges {
            node {
              childMarkdownRemark {
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                }
              }
            }
          }
        }
      }
    `)
    
    if (result) {
      resolve(result)
    } else {
      reject(result)
    }

    //fulfilled promise
  }).then((result) => {
  const pagesToCreate = result.data.allFile.edges

  pagesToCreate.forEach((edge) => {
    const {frontmatter, fields} = edge.node.childMarkdownRemark

    const slug = fields.slug
    createPage({
      path: slug,
      component: path.resolve(
        `src/templates/${String(frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        slug
      },
    })
  })
  // rejected promise
  }).catch( result => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
    } else {
      console.error(result)
    }
  })
}