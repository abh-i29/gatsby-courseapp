import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Coursecart from '../components/Cart/Coursecart'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    < HeroSection
      img= {data.img.childImageSharp.fluid}
      title="Welcome to my Server"
      subtitle="This is my awesome project"
      heroclass="hero-background"
    />
    <Infoblock heading="About us" url="/about/"/>
    <Infoblock heading="Services" url="/services/"/>
    <Coursecart courses={data.courses} />
    <DualInfoblock heading="Our Team" address="https://images.pexels.com/photos/5540773/pexels-photo-5540773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  courses: allContentfulCourses{
      edges {
        node {
          id
          title
          category
          price
          description {
            description
          }
          image {
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    
}
`

export default IndexPage
