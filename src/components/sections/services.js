import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container } from "../global"

const Services = () => {
  const wappImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/today-apps-30.png" }) {
      childImageSharp {
        fluid(maxWidth:90, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
const stdImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/software-30.png" }) {
      childImageSharp {
        fluid(maxWidth:80, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
const iotImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/iot-sensor-50.png" }) {
      childImageSharp {
        fluid(maxWidth:100, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
const cmsImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/plesk-50.png" }) {
      childImageSharp {
        fluid(maxWidth:100, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
const ecommImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/online-shop-64.png" }) {
      childImageSharp {
        fluid(maxWidth:98, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
const entrImg = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "vacuum/enterprise-resource-planning-64.png" }) {
      childImageSharp {
        fluid(maxWidth:98, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
  return(
  <Section id="services">
    <StyledContainer>
      <Subtitle>Services</Subtitle>
      <SectionTitle>We Automate and Develop</SectionTitle>
        <FeaturesGrid>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={wappImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Web Apps</FeatureTitle>
          <FeatureText>
            Apps that needed to be live on the internet. Ready to deploy.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={stdImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Standalone</FeatureTitle>
          <FeatureText>
            Softwares that runs on local environments.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={iotImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>IoT</FeatureTitle>
          <FeatureText>
           Solution that is made for realtime applications running on embedded devices.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={cmsImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>CMS</FeatureTitle>
          <FeatureText>
            Manage your content around the web.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={ecommImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>eCommerce</FeatureTitle>
          <FeatureText>
            We can help you connect your customers to your business.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageWrapper>
            <SoftwareImage fluid={entrImg.file.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Enterprise</FeatureTitle>
          <FeatureText>
            Business problems that persists, we are here to help.
          </FeatureText>
        </FeatureItem>
        </FeaturesGrid>
    </StyledContainer>
  </Section>
  )
}

export default Services

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
const SoftwareImage = styled(Img)`
  width: 100px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 80px;
    display: none;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`