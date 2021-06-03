import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Header';
import Breadcrumbs from '../components/layouts/Breadcrumbs';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/whyus/Content';

const pagelocation = 'Why Choose Us'

const Whyus = ( {data} ) => {
        return (
            <Fragment>
                <MetaTags>
                    <title>Onitir - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header data={data}/>
                <Breadcrumbs breadcrumb={{ pagename: data.heading }} data={data}/>
                <Content data={data}/>
                <Footer footer={{ style:"footer-style-three", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
}

export default Whyus;

export const pageQuery = graphql`
query WhyUsPageQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "why-us-page"}}) {
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
      servicecard1{
				title
        description
      }
      servicecard2{
				title
        description
      }
      servicecard3{
				title
        description
      }
      }
    }
  }
}
`