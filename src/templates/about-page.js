import { graphql } from 'gatsby'
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Headerthree';
import Breadcrumbs from '../components/layouts/Breadcrumbs';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/about/Content';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
import '../index.css';

const AboutPage = ({ data }) => {
  debugger;
  const aboutPageData = data;
  const pagelocation = data.heading;
  return (
    <Fragment>
      <MetaTags>
        <title>{aboutPageData.title} | {pagelocation}</title>
        <meta
          name="description"
          content="#"
        />
      </MetaTags>
      <Header data={data}/>
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} data={data}/>
      <Content data ={aboutPageData}/>
      <Footer footer={{ style: "footer-style-three", logo: "assets/img/logo.png" }} />
    </Fragment>
  );
}

export default AboutPage;

export const aboutPageQuery = graphql`
query AboutPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
    frontmatter {
      title
      logo {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      quoteImage {
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
      heading
      subheading
      aboutUs {
        title
        description
      }
      services {
        title
        heading
        servicecard1 {
          icon
          title
          description
        }
        servicecard2 {
          icon
          title
          description
        }
        servicecard3 {
          icon
          title
          description
        }
        servicecard4 {
          icon
          title
          description
        }
      }
      framework {
        title
        heading
        frameworkbanner {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        framework1 {
          icon
          title
          description
        }
        framework2 {
          icon
          title
          description
        }
        framework3 {
          icon
          title
          description
        }
        framework4 {
          icon
          title
          description
        }
      }
    }
  }
}
`
