import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Softwares = () => (
  <Section id="softwares">
    <StyledContainer>
      <Subtitle>Softwares</Subtitle>
      <SectionTitle>Software as a Service</SectionTitle>
        <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>POS</FeatureTitle>
          <FeatureText>
            A cashier's friend. Manages payments and services in your store.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Accounting</FeatureTitle>
          <FeatureText>
            Keep your finances on track. No more manual computations needed.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Inventory</FeatureTitle>
          <FeatureText>
            Keep records of your stocks and products to monitor daily consumptions.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Space Market</FeatureTitle>
          <FeatureText>
            An ecommerce site that you can sell your items all around the globe.
          </FeatureText>
        </FeatureItem>
        </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Softwares

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
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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