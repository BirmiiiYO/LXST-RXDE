import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import heroImage from 'assets/images/heroSection.png'
import { Button } from 'components/UI/Button'
import { Text } from 'components/UI/Text'

import { ButtonContainer, Container, HeroImage } from './styles'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <Text
          typography="EbHeadline1"
          maxWidth="540px"
          padding="70px 0 90px 0"
          margin="0 200px 0 0"
        >
          <Trans i18nKey="homePage.heroTitle" components={[<span />]} />
        </Text>
        <Text typography="RParagraph2" color="grey" maxWidth="350px">
          {t('base.largeText')}
        </Text>
        <ButtonContainer>
          <Button buttonType="round" padding="47px 23px">
            {t('base.learnMore')}
          </Button>
        </ButtonContainer>
      </Container>
      <HeroImage src={heroImage} alt="Hero section image" />
    </>
  )
}
