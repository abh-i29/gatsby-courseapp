import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    < HeroSection
      img= {data.img.childImageSharp.fluid}
      title="About Abhishek Upadhyay"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock heading="A message from me" address="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Infoblock heading="About Vision"/>
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default AboutPage
