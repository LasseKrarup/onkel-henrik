import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Parallax } from "react-scroll-parallax"

import Layout from "../components/Layout";
import Seo from "../components/Seo";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { FiChevronDown } from "react-icons/fi"
import OnkelHenrik from "../images/onkel-henrik-optimized.svg"
import OnkelHenrikEyes from "../images/onkel-henrik-eyes-optimized.svg"


// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  subtitle,
  image,
  html,
}) => {

  return (
    <div>
      <div className="hero is-fullheight bg-main relative">

        <div className="hero-body">
          <div className="container has-text-centered">
            <Parallax speed={10}>
              <h1 className="title lg:text-8xl tracking-wider lg:pb-4 lg:-mt-16 lg:-ml-32">{title}</h1>
            </Parallax>
            <Parallax speed={-10}>
              <h2 className="subtitle lg:text-6xl lg:ml-32">{subtitle}</h2>
            </Parallax>
          </div>

          <img src={OnkelHenrik} style={{transform: "rotate(-90deg)"}} alt="Onkel Henrik" className="absolute right-0 bottom-10 pointer-events-none" />
        </div>

        <div className="hero-foot lg:pb-28">
          <div className="level">
            <Parallax speed={20} className="level-item flex-col">
              <p className="amatic lg:text-2xl pb-2">
                psst... scroll ned
              </p>
              <p>
                <span className="icon is-large text-6xl text-gray-500">
                  <FiChevronDown />
                </span>
              </p>
            </Parallax>
          </div>
        </div>
      </div>



      <div className="is-centered">
        <div className="section bg-orange-100">
          <div className="container">
            <Parallax speed={5}>
              <h2 className="title text-6xl pl-64 pb-8">Hej Lærer</h2>
            </Parallax>
            <Parallax speed={-2}>
              <h3 className="subtitle text-4xl pl-32 pb-8">Velkommen til Onkel Henrik i Ekkodalen</h3>
            </Parallax>
          
            <Parallax speed={10} className="content">
              <p>Her ligger et undervisningsforløb, der ca. passer med en lektion. I kan følge det slavisk, eller vælge at gentage en aktivitet, hvis der er spændende muligheder at undersøge. </p>
              <p>Måske er der nogen der vil trampe, klappe, synge, danse, dramatisere - så brug muligheden for det. Så Kan I tage fat i de andre øvelser en anden dag.</p>
              <p>På samme måde kan I vælge at skrive nye vers og benytte “Singback”-versionen, hvor jeg holder min mund :)</p>
            </Parallax>
          </div>
        </div>

        <div className="section bg-green-200">
          <div className="container has-text-centered flex flex-col items-center">
            <Parallax translateY={[-100,50]}>
              <h2 className="title text-6xl">Det' Musik</h2>
            </Parallax>
              <Parallax translateY={[-50,50]}>
                <h3 className="subtitle text-4xl">Følg med i videoen</h3>
              </Parallax>
            <Parallax speed={10}><img src="http://dummyimage.com/840x600" width="840" alt="placeholder" /></Parallax>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <Parallax speed={-10} className="column flex justify-end pr-8">
                <img src={OnkelHenrik} alt="Onkel Henrik" className="pointer-events-none" />
              </Parallax>
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p>
                    Så skal I <strong>danse</strong>, sørg for at der er plads på gulvet. Man kan lave den stående, men senere er det også rigtig godt at danse den i en rundkreds, mens man danser rundt i cirkelen - indtil man skal i gang med imitationen
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div className="section bg-main">
          <div className="container has-text-centered">
            <Parallax translateX={["50px", "-50px"]}>
              <h2 className="title text-6xl">Velkommen</h2>
            </Parallax>
            <Parallax translateX={["-50px","50px"]}>
              <h3 className="subtitle text-4xl">Jeg glæder mig til at have musik med jer</h3>
            </Parallax>
            <Parallax translateX={["100px","-100px"]} className="content text-xl">
              <p>
                - og forhåbentlig har vi det også sjovt samtidig
              </p>
              <p>
                Det vil være intro før Ekko-dansen
              </p>
            </Parallax>

          </div>
        </div>

        <div className="section bg-orange-100">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <Parallax speed={20} className="column">
                <h2 className="title text-6xl">Ekko-sang</h2>
                  <p className="content text-xl">
                    I skal lige vide at jeg bruger et lille signal, så vi husker at vi skal starte forfra med at synge og bevæge os - det lyder sådan her - jeg viser det på videoen.
                  </p>
              </Parallax>
              <Parallax speed={-10} className="column is-8 flex justify-end pr-8">
                <img src="https://www.dummyimage.com/840x600/" alt="Onkel Henrik" className="pointer-events-none" />
              </Parallax>
            </div>
          </div>  
        </div>

        <div className="section">
          <div className="container">
            <div className="columns is-vcentered">
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p>
                    Nu skal I til at <strong>klappe</strong>, så du som lærer skal være med til at vælge 4 elever, der klapper for.
                  </p>
                  
                  <p>
                    Man må gerne genbruge mine figurer, men lige så gerne finde på egne - og det vil være godt hvis man kan huske den, når man skal klappe alene igen
                  </p>
                </div>
              </Parallax>
              <Parallax speed={-10} className="column flex justify-start pr-8">
                <img src={OnkelHenrikEyes} alt="Onkel Henrik" className="pointer-events-none" />
              </Parallax>
            </div>
          </div>
        </div>

        {/* <PreviewCompatibleImage imageInfo={image} />
        <div
          className="content"
          dangerouslySetInnerHTML={{__html: html}}
        ></div> */}
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,

};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout>
      <Seo title={frontmatter.title} siteMetadata={siteMetadata}></Seo>
      <IndexPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
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
        subtitle
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
