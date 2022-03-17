import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const ProductPageTemplate = ({
  title,
  image,
  html
}) => {

  return (
    <div>
        <h1>{title}</h1>
        
        <PreviewCompatibleImage imageInfo={image} />

        <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        title={frontmatter.title}
        image={frontmatter.image1}
        html={data.markdownRemark.html}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($slug : String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
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
  }
`;
