import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const SubpageTemplate = ({
  title,
  image,
  html
}) => {

  return (
    <div>
        <h1 className="text-2xl font-light tracking-widest">{title}</h1>
        
        <PreviewCompatibleImage imageInfo={image} />

        <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
};

SubpageTemplate.propTypes = {
  title: PropTypes.string,
  
};

const Subpage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout>
      <Seo title={frontmatter.title} siteMetadata={siteMetadata}></Seo>
      <SubpageTemplate
        title={frontmatter.title}
        image={frontmatter.image1}
        html={data.markdownRemark.html}
      />
    </Layout>
  );
};

Subpage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    }),
  }),
};

export default Subpage;

export const SubpageQuery = graphql`
  query Subpage($slug : String!) {
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

    site{
      siteMetadata{
        author
        title
        description
      }
    }
  }
`;
