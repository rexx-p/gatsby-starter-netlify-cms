import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Headerthree';
import Breadcrumbs from '../components/layouts/Breadcrumbs';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/contact/Content';
import { graphql } from 'gatsby';


export const ContactUsTemplate = ({ data }) => {
    const pagelocation = data.heading;

    return (
        <Fragment>
            <MetaTags>
                <title>Onitir - React Template | {pagelocation}</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumbs breadcrumb={{ pagename: pagelocation }} data={data}/>
            <Content data= {data}/>
            <Footer footer={{ style: "footer-style-three", logo: "assets/img/logo.png" }} />
        </Fragment>
    );
}



const ContactUsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <ContactUsTemplate
        data={frontmatter}
      />
    )
  }

export default ContactUsPage;

export const pageQuery = graphql`
query ContactUsPageQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "contact-us-page"}}) {
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
        heading
        subheading
        contactdetails {
          addressdetails {
            title
            address
          }
          phonenumber {
            number1
            number2
          }
          email {
            emailid1
            emailid2
          }
        }
      }
    }
  }
  
`