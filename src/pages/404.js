import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const NotFoundPage = ({data}) => {

  const { siteMetadata } = data.site

  return(
    <Layout>
      <Seo title="404: Not found" siteMetadata={siteMetadata} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
    
  }
`;