import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container } from "../global"

const Pricing = () => {
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
    <Section id="pricing">
      <StyledContainer>
        <Subtitle>Pricing</Subtitle>
        <SectionTitle>We give you free perks, and pay as you go.</SectionTitle>
        <InfoSubtitle>
          Pay-as-you-go allows you to easily adapt to changing business needs
          without overcommitting budgets and improving your responsiveness to
          changes. With a pay-as-you-go model, you can adapt your business
          depending on need and not on forecasts, reducing the risk of
          overpositioning or missing capacity.
        </InfoSubtitle>
        <FeaturesGrid>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[0]} />
            </ImageWrapper>
            <FeatureTitle>POS</FeatureTitle>
            <FeatureText>
            <Subtitle>Free Perks</Subtitle>
            1GiB of total Storage<br/>
            5GiB of network egress per month<br/>
            5 users<br/>
            <Subtitle>Business Plan</Subtitle>
            Includes <b>free perks</b><br/>
            PHP 2.00 per 500MB of Storage (free perks excluded)<br/>
            PHP 20.00 per 5GB of network egress per month(free perks excluded)<br/>
            10 users (PHP 499.00 / month)<br/>
            include Analytics (PHP 100.00 / month)
            include Mobile Payments support (PHP 250.00 / month)
            <Subtitle>Enterprise Plan</Subtitle>
            includes <b>Business Plan</b><br/>
            Custom Domain Site<br/>
            Customized user access<br/>
            24/7 support<br/>
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[1]} />
            </ImageWrapper>
            <FeatureTitle>Accounting</FeatureTitle>
            <FeatureText>
            <Subtitle>Free Perks</Subtitle>
            1GiB of total Storage<br/>
            5GiB of network egress per month<br/>
            5 users<br/>
            <Subtitle>Business Plan</Subtitle>
            Includes <b>free perks</b><br/>
            PHP 2.00 per 500MB of Storage (free perks excluded)<br/>
            PHP 20.00 per 5GB of network egress per month(free perks excluded)<br/>
            10users (PHP 499.00 / month)<br/>
            include Analytics (PHP 100.00 / month)
            include Mobile Payments support (PHP 250.00 / month)
            <Subtitle>Enterprise Plan</Subtitle>
            includes <b>Business Plan</b><br/>
            Custom Domain Site<br/>
            Customized user access<br/>
            24/7 support<br/>
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <ImageWrapper>
              <SoftwareImage fluid={source[2]} />
            </ImageWrapper>
            <FeatureTitle>Inventory</FeatureTitle>
            <FeatureText>
            <Subtitle>Free Perks</Subtitle>
            1GiB of total Storage<br/>
            5GiB of network egress per month<br/>
            5  users<br/>
            <Subtitle>Business Plan</Subtitle>
            Includes <b>free perks</b><br/>
            PHP 2.00 per 500MB of Storage (free perks excluded)<br/>
            PHP 20.00 per 5GB of network egress per month(free perks excluded)<br/>
            10 users (PHP 499.00 / user / month)<br/>
            PHP 5.00 per Mobile Payment Transactions<br/>
            include Analytics<br/> 
            <Subtitle>Enterprise Plan</Subtitle>
            includes <b>Business Plan</b><br/>
            Custom Domain Site<br/>
            Customized user access<br/>
            24/7 support<br/>
            </FeatureText>
          </FeatureItem>
        </FeaturesGrid>
      </StyledContainer>
    </Section>
  )
}
export default Pricing

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
  max-width: 1000px;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
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
const InfoSubtitle = styled.h6`
  text-align:center;
  max-width:800px;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 12px;
  
`
const Details = styled.p`

  font-size: 16px;
  line-height: 32px;
  margin-bottom: 12px;
  text-align: center;
`
