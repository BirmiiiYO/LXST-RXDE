import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import featureImage from 'assets/images/Home/featuresSection.png'
import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'

import { Description, Image, SolutionContainer } from './styles'

export const FeaturesSection = () => {
  const { t } = useTranslation()
  return (
    <>
      {' '}
      <Container width="1110px" flex="space-between" margin="120px 0">
        <Text typography="EbHeadline2" maxWidth="450px" margin="0 300px 0 0">
          <Trans i18nKey="homePage.featureTitle" components={[<span />]} />
        </Text>
        <Container flex="column">
          <Text
            typography="RParagraph2"
            color="grey"
            maxWidth="400px"
            margin="0 0 30px 0"
          >
            {t('base.mediumText')}
          </Text>
          <div>
            <Button>{t('base.discoverMore')}</Button>
          </div>
        </Container>
      </Container>
      <SolutionContainer>
        <Image src={featureImage} />
        <Description>
          <Text maxWidth="450px" padding="10px" typography="EbHeadline2">
            {t('homePage.featureSubtitleTitle')}
          </Text>
          <Text
            typography="RParagraph2"
            color="grey"
            maxWidth="540px"
            margin="0 0 30px 0"
          >
            {t('base.largeText')}
          </Text>
          <Button>{t('base.learnMore')}</Button>
        </Description>
      </SolutionContainer>
    </>
  )
}
