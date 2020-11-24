import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Products = () => (
  <Section id="services">
    <StyledContainer>
      <Subtitle>Services</Subtitle>
      <SectionTitle>We Automate and Develop</SectionTitle>
        <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Web Applications</FeatureTitle>
          <FeatureText>
            Apps that needed to be live on the internet. Ready to deploy.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Standalone Softwares</FeatureTitle>
          <FeatureText>
            Softwares that runs on local environments.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>IoT Systems</FeatureTitle>
          <FeatureText>
           Solution that is made for realtime applications running on embedded devices.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>CMS</FeatureTitle>
          <FeatureText>
            Manage your content around the web.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>eCommerce Systems</FeatureTitle>
          <FeatureText>
            We can help you connect your customers to your business.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Enterprise Solutions</FeatureTitle>
          <FeatureText>
            Business problems that persists, we are here to help.
          </FeatureText>
        </FeatureItem>
        </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Products

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
