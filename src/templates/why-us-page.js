import React, {  Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Header';
import Breadcrumbs from '../components/layouts/Breadcrumbs';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/whyus/Content';
import { graphql } from 'gatsby'
const pagelocation = 'Why Choose Us'

export const WhyUsTemplate = ( {data} ) => {
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
                <Footer footer={{ style:"", logo:"assets/img/logo.png" }}/>
            </Fragment>
        );
}

const WhyUsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <WhyUsTemplate
      data={frontmatter}
    />
  )
}

export default WhyUsPage

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
        experience {
          total
          title
          description
        }
        projects {
          total
          title
          description
        }
      }
      services {
        title
        heading
        servicecard1 {
          icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
        servicecard2 {
          icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
        servicecard3 {
          icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
      }
    }
  }
}


`