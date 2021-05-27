import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/home/Content';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../../node_modules/slick-carousel/slick/slick.css"; 
// import "../../node_modules/slick-carousel/slick/slick.css";
// import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
import '../index.css';



const pagelocation = 'Homepage'
export const IndexPageTemplate = ( {data} ) => {
  return (
    <Fragment>
      <MetaTags>
        <title>{data.title} | {pagelocation}</title>
        <meta
          name="description"
          content="#"
        />
      </MetaTags>
      <Header data={data}/>
      <Content data={data}/>
      <Footer footer={{ style: "", logo: "assets/img/logo-white.png" }} />
    </Fragment>
  );
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      data={frontmatter}
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        logo {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
