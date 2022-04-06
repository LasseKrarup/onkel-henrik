/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <main>
          {children}
        </main>
      </div>


      
      <Footer className="mt-8">
        © {new Date().getFullYear()}, Design by
        {` `}
        <a href="https://www.lassekrarup.com">Lasse Krarup</a>
      </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
