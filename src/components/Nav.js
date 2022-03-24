import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import { v4 } from "uuid"

const Nav = ( {className} ) => {
    const { edges } = useStaticQuery(
        graphql`
            {
                allFile(filter: {sourceInstanceName: {eq: "markdown"}, internal: {mediaType: {eq: "text/markdown"}}}) {
                    edges {
                        node {
                            childMarkdownRemark {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
                }
            }
        `
        ).allFile

    return (
        <nav className={"" + (className ? ` ${className}` : "")}>
            <ul>
                { edges.map( (edge, index) => {
                    const markdown = edge.node.childMarkdownRemark
                    
                    return(
                        <li key={v4()} className="text-gray-600 hover:text-black"><Link to={markdown.fields.slug}>{markdown.frontmatter.title}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    className: PropTypes.string
}

export default Nav