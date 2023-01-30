import React from 'react'

import heroImage from 'assets/images/heroSection.png'
import { Button } from 'components/UI/Button'

import { ButtonContainer, Container, HeroImage, Text, Title } from './styles'

export const HeroSection = () => (
  <>
    <Container>
      <Title>
        Find true power in your data with <span>Ensome</span>
      </Title>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi.
      </Text>
      <ButtonContainer>
        <Button type="round">Learn more</Button>
      </ButtonContainer>
    </Container>
    <HeroImage src={heroImage} alt="Hero section image" />
  </>
)
