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
const pagelocation = 'About Us'

const AboutPage = ({ data }) => {
  console.log(JSON.stringify(data));
  const aboutPageData = data.markdownRemark.frontmatter;
  return (
    <Fragment>
      <MetaTags>
        <title>{aboutPageData.title} | {pagelocation}</title>
        <meta
          name="description"
          content="#"
        />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      {/* <Content data ={aboutPageData}/> */}
      <Footer footer={{ style: "footer-style-three", logo: "assets/img/logo.png" }} />
    </Fragment>
  );
}

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`