import React from "react"
import styled from "styled-components"

import { Section, Container } from "../../global"

const Products = () => (
  <Section id="products">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Smart money management</SectionTitle>
      
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Receive budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
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
  grid-template-columns: 1fr 1fr;
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
  justify-content:flex-start;
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
