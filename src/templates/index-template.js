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
import OnkelHenrikZzz from "../images/onkel-henrik-zzz.svg"


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
              <h2 className="title text-6xl pl-64 pb-8">Hej</h2>
            </Parallax>
            <Parallax speed={-2}>
              <h3 className="subtitle text-4xl pl-32 pb-8">- og velkommen til Onkel Henrik i Ekkodalen</h3>
            </Parallax>
          
            <Parallax speed={10} className="content">
              Her er en lektion med fokus på imitation. I kan følge den slavisk eller plukke ud og gentage aktiviteter. Måske er der nogen der vil trampe, klappe, synge, danse, dramatisere - så brug muligheden for det. Så kan I tage fat i de andre øvelser en anden dag.
              På samme måde kan I benytte “sing back”-versionen, synge selv - og måske finde på nye vers i en anden time. 
            </Parallax>
          </div>
        </div>

        <div className="section bg-green-200">
          <div className="container has-text-centered flex flex-col items-center">
            <Parallax translateY={[-100,50]}>
              <h2 className="title text-6xl">Så starter vi...</h2>
            </Parallax>
              <Parallax translateY={[-50,50]}>
                <h3 className="subtitle text-4xl">"Det' Musik"</h3>
              </Parallax>
            <Parallax speed={10}><audio src="/assets/det-musik.wav" controls/></Parallax>
          </div>
        </div>

        <div className="section bg-green-200">
          <div className="container flex flex-col items-center">
            <h2 className="title text-6xl">Ekkodansen</h2>
            <div className="columns is-vcentered">
              <Parallax speed={-10} className="column flex justify-end pr-8">
              <iframe width="840" height="600" src="https://www.youtube.com/embed/47VF3MAzvNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Parallax>
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p>
                    Så skal vi <strong>danse!</strong> Sørg for at der er plads på gulvet. Man kan lave den stående, men senere er det rigtig godt at danse i en rundkreds indtil man skal klappe, og vender ind mod hinanden.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
        
        <div className="section bg-green-200">
          <div className="container has-text-centered">
            <div className="is-vcentered">
              <Parallax speed={10}>
                <h2 className="title text-6xl">Vi tager den lige en gang til!</h2>
              </Parallax>
              <Parallax speed={-10} className="flex justify-center">
                <iframe width="840" height="600" src="https://www.youtube.com/embed/47VF3MAzvNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Parallax>
            </div>
          </div>  
        </div>

        <div className="section bg-orange-100">
          <div className="container has-text-centered">
            <div className="flex flex-col items-center is-vcentered">
              <Parallax speed={20}>
                <h2 className="title text-6xl">Så skal vi igang med at lave ekko!</h2>
                  <p className="content text-xl">
                  I skal lige vide at jeg bruger et lille signal, når vi skal starter på næste vers - det lyder sådan her: 
                  </p>
              </Parallax>
              <Parallax speed={-10} className="pt-16">
                <audio src="/assets/Ekko_Signal.wav" controls />
              </Parallax>
            </div>
          </div>  
        </div>

        <div className="section bg-orange-100">
          <div className="container has-text-centered">
            <div className="is-vcentered">
              <Parallax speed={10}>
                <h2 className="title text-6xl">Ekko-sangen</h2>
              </Parallax>
              <Parallax speed={-10} className="flex justify-center pt-16">
                <audio src="Ekkosangen.mp3" controls />
              </Parallax>
            </div>
          </div>  
        </div>

        <div className="section bg-main">
          <div className="container has-text-centered">
            <Parallax translateX={["50px", "-50px"]}>
              <h2 className="title text-6xl">Nu skal I klappe for...</h2>
            </Parallax>
            <Parallax translateX={["-50px","50px"]}>
              <h3 className="subtitle text-4xl">så I skal vælge 4 der klapper for.</h3>
            </Parallax>
            <Parallax translateX={["200px","-200px"]} className="content text-xl flex flex-col items-center justify-center">
              <p className="max-w-md pt-8">
                Man må gerne genbruge mine figurer, men lige så gerne finde på sine egne - og det vil være godt hvis man klapper en rytme man kan huske - for man skal gøre det 2 gange :) 
              </p>
              <audio className="mr-4" src="/assets/Ekkosangen_uden_klap.mp3" controls />
              <p className="max-w-md pt-8">
                Hvis I hellere vil trampe, hoppe, synge, gå som en julemand eller lyde som en heks, så brug min sing-back version og hent teksten
              </p>
              <div className="flex justify-center">
                <audio className="mr-4" src="/assets/Ekkosangen_singback.mp3" controls />
                <a className="button is-primary ml-4" href="/assets/Ekkosangen.pdf" target="_blank" rel="noreferrer">Hent teksten her</a>
              </div>
            </Parallax>

          </div>
        </div>


        <div className="section bg-main">
          <div className="container">
            <div className="columns is-vcentered">
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p>
                    Gør det lige en gang til - tænker at der er mindst 4 mere der har lyst til at før an? 
                  </p>

                  <div className="mt-8">
                    <strong>Jeres klap</strong>
                    <audio src="/assets/Ekkosangen_uden_klap.mp3" controls />
                  </div>
                  <div className="mt-8">
                    <strong>Sing back</strong>
                    <audio src="/assets/Ekkosangen_singback.mp3" controls />
                  </div>
                </div>
              </Parallax>
              <Parallax speed={-10} className="column flex justify-start pr-8">
                <img src={OnkelHenrikEyes} alt="Onkel Henrik" className="pointer-events-none" />
              </Parallax>
            </div>
          </div>
        </div>

        <div className="section bg-main">
          <div className="container flex flex-col items-center">
            <h2 className="title text-6xl">Ro på</h2>
            <div className="columns is-vcentered">
              <Parallax speed={-10} className="column flex justify-start pr-8">
                <img src={OnkelHenrikZzz} alt="Onkel Henrik" className="pointer-events-none" />
              </Parallax>
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl flex flex-col items-center">
                  <p>
                  Nu skal I lægge jer på ryggen eller sætte jer ned, så I er afslappede. I skal bare lukke øjnene, tage en pause og lytte.
                  </p>
                    <audio className="mt-8" src="/assets/ro-paa.wav" controls />
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div className="section bg-green-200">
          <div className="container flex flex-col items-center">
            <h2 className="title text-6xl">Spejldans</h2>
            <div className="columns is-vcentered">
              <Parallax speed={-10} className="column flex justify-end pr-8">
                <iframe width="840" height="600" src="https://www.youtube.com/embed/tmXjjK86uI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Parallax>
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p>
                    Så skal I spejle mig og min dans. Stil jer op i rækker, så I har lidt plads til at bevæge jer.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div className="section bg-green-200">
          <div className="container">
            <div className="columns is-vcentered">
              <Parallax speed={20} className="column">
                <div className="notification is-info text-xl">
                  <p className="pt-8">
                    Vi tager den lige en gang til!
                  </p>
                  <p className="pt-8">
                    Hvis I selv vil danse for, så kan I starte musikken her og vælge nogen der danser for.
                  </p>
                  <audio className="my-8" src="/assets/Spejldans.wav" controls />
                </div>
              </Parallax>
              <Parallax speed={-10} className="column flex justify-end pr-8">
                <iframe width="840" height="600" src="https://www.youtube.com/embed/tmXjjK86uI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Parallax>
            </div>
          </div>
        </div>


        <div className="section bg-main">
          <div className="container has-text-centered">
            <Parallax translateX={["50px", "-50px"]}>
              <h2 className="title text-6xl">Tak for i dag...</h2>
            </Parallax>
            <Parallax translateX={["-50px","50px"]}>
              <h3 className="subtitle text-4xl">...vi slutter af med Ro På.</h3>
            </Parallax>
            <Parallax translateX={["200px","-200px"]} className="content text-xl flex flex-col items-center justify-center">
              <p className="max-w-md pt-8">
              I må synge og nynne med på det hele - men teksten til omkvædet er til at huske “na,na,na,na ro på, ro på nu” :)
              </p>
                <audio className="mr-4" src="/assets/ro-paa.wav" controls />
            </Parallax>

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
