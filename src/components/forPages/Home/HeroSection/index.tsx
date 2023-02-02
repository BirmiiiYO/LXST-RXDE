import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import heroImage from 'assets/images/heroSection.png'
import { Button } from 'components/UI/Button'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { ButtonContainer, Container, HeroImage } from './styles'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <Text
          typography={theme.typography.EB_HEADLINE_1}
          maxWidth="540px"
          padding="70px 0 90px 0"
          margin="0 200px 0 0"
        >
          <Trans i18nKey="homePage.heroTitle" components={[<span />]} />
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
          maxWidth="350px"
        >
          {t('homePage.text')}
        </Text>
        <ButtonContainer>
          <Button buttonType="round" padding="47px 23px">
            Learn more
          </Button>
        </ButtonContainer>
      </Container>
      <HeroImage src={heroImage} alt="Hero section image" />
    </>
  )
}
