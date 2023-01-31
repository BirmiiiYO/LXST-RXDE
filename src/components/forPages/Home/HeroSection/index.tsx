import React from 'react'

import heroImage from 'assets/images/heroSection.png'
import { Button } from 'components/UI/Button'
import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import { ButtonContainer, Container, HeroImage, Text } from './styles'

export const HeroSection = () => (
  <>
    <Container>
      <Title
        typography={theme.typography.EB_HEADLINE_1}
        maxWidth="540px"
        padding="70px 0 90px 0"
        margin="0 200px 0 0"
      >
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
