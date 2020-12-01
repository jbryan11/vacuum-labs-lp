import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container } from "../global"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      webappImg: file(relativePath: { eq: "today-apps-30.png" }) {
        childImageSharp {
          fluid(maxWidth: 90, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      standaloneImg: file(relativePath: { eq: "software-30.png" }) {
        childImageSharp {
          fluid(maxWidth: 80, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      iotImg: file(relativePath: { eq: "iot-sensor-50.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      cmsImg: file(relativePath: { eq: "plesk-50.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ecommImg: file(relativePath: { eq: "online-shop-64.png" }) {
        childImageSharp {
          fluid(maxWidth: 98, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      entrImg: file(
        relativePath: { eq: "enterprise-resource-planning-64.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 98, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const sources = [
    data.webappImg.childImageSharp.fluid,
    data.standaloneImg.childImageSharp.fluid,
    data.iotImg.childImageSharp.fluid,
    data.cmsImg.childImageSharp.fluid,
    data.ecommImg.childImageSharp.fluid,
    data.entrImg.childImageSharp.fluid,
  ]
  return (
    <Section id="services">
      <StyledContainer>
        <Subtitle>Services</Subtitle>
        <SectionTitle>We Develop and Automate</SectionTitle>
        <InfoSubtitle>
          We build, deploy and maintain software solutions for your business needs.
          Our products comes in a production ready state and ready for you
          to use it on your daily needs.   
        </InfoSubtitle>
        <FeaturesGrid>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[0]} />
            </ImageWrapper>
            <FeatureTitle>Web Apps</FeatureTitle>
            <FeatureText>
              Apps that needed to be live on the internet. Ready to deploy.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[1]} />
            </ImageWrapper>
            <FeatureTitle>Standalone</FeatureTitle>
            <FeatureText>
              Softwares that runs on local environments.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[2]} />
            </ImageWrapper>
            <FeatureTitle>IoT</FeatureTitle>
            <FeatureText>
              Solution that is made for realtime applications running on
              embedded devices.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[3]} />
            </ImageWrapper>
            <FeatureTitle>CMS</FeatureTitle>
            <FeatureText>Manage your content around the web.</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[4]} />
            </ImageWrapper>
            <FeatureTitle>eCommerce</FeatureTitle>
            <FeatureText>
              We can help you connect your customers to your business.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={sources[5]} />
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
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
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
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
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
const InfoSubtitle = styled.h6`
display:flex;
  text-align:center;
  justify-content:center;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 12px;
 
`
const Details = styled.p`
  max-width: 800px;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 12px;
  text-align: center;
`
