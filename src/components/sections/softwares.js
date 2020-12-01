import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container } from "../global"

const Softwares = () => {
  const data = useStaticQuery(graphql`
    query {
      posImg: file(relativePath: { eq: "pos-terminal-100.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      accImg: file(relativePath: { eq: "accounting-100.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      inventoryImg: file(relativePath: { eq: "inventory-64.png" }) {
        childImageSharp {
          fluid(maxWidth: 98, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      spacemartImg: file(relativePath: { eq: "online-shop-100.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const source = [
    data.posImg.childImageSharp.fluid,
    data.accImg.childImageSharp.fluid,
    data.inventoryImg.childImageSharp.fluid,
    data.spacemartImg.childImageSharp.fluid,
  ]
  return (
    <Section id="softwares">
      <StyledContainer>
        <Subtitle>Softwares</Subtitle>
        <SectionTitle>Software as a Service</SectionTitle>
        <FeaturesGrid>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[0]} />
            </ImageWrapper>
            <FeatureTitle>POS</FeatureTitle>
            <Subtitle>PHP 999/month</Subtitle>
            <FeatureText>
              A cashier's friend. Manages payments and services in your store.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[1]} />
            </ImageWrapper>
            <FeatureTitle>Accounting</FeatureTitle>
            <Subtitle>PHP 799/month</Subtitle>
            <FeatureText>
              Keep your finances on track. No more manual computations needed.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[2]} />
            </ImageWrapper>
            <FeatureTitle>Inventory</FeatureTitle>
            <Subtitle>PHP 1,199/month</Subtitle>
            <FeatureText>
              Keep records of your stocks and products to monitor daily
              consumptions.
            </FeatureText>
          </FeatureItem>
        </FeaturesGrid>
      </StyledContainer>
    </Section>
  )
}
export default Softwares

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
  max-width: 800px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
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
const FeatureText = styled.p`
  text-align: center;
`
