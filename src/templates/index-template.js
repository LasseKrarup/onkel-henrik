import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Seo from "../components/Seo";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  image,
  html,
}) => {

  return (
    <>
      <Seo title={title}></Seo>
      <h1>{title}</h1>
      <PreviewCompatibleImage imageInfo={image} />

      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,

};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
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
  query IndexTemplateQuery {
    markdownRemark(fields: {slug: {eq: "/"}}) {
      frontmatter {
        title
        image1 {
          image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          alt
        }
      }
      html
    }
  }
`;
