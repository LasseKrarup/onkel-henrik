import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  image,
  html,
}) => {

  return (
    <>
      <h1 
        className="
          text-4xl
          tracking-wider
          font-light
          mb-4
        "
      >{title}</h1>

      <PreviewCompatibleImage imageInfo={image} />

      <div 
        className="py-8"
        dangerouslySetInnerHTML={{__html: html}}
      ></div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,

};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout>
      <Seo title={frontmatter.title} siteMetadata={siteMetadata}></Seo>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image1}
        html={data.markdownRemark.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexTemplateQuery($slug : String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        image1 {
          image {
            childImageSharp {
              gatsbyImageData(width: 450)
            }
          }
          alt
        }
      }
      html
    }

    site {
      siteMetadata {
        author
        description
        title
      }
    }
    
  }
`;
