import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'

import Photo from './img_0011.png'
import { Benefit, Image, TextBlock } from './styles'

export const WhyChooseUsSection = () => {
  const { t } = useTranslation()
  const benefits = t('solutionPage.benefits', { returnObjects: true }) as []
  return (
    <Container flex="space-between">
      <Image src={Photo} alt="WhyUs" />
      <TextBlock>
        <Text typography="EbHeadline2">{t('solutionPage.whyChooseUs')}</Text>
        {benefits.map(({ id, name, text }) => (
          <Benefit key={id}>
            <Text typography="BHeadline6" margin="0 0 15px 0">
              {name}
            </Text>
            <Text typography="RParagraph2" color="grey" maxWidth="540px">
              {text}
            </Text>
          </Benefit>
        ))}
      </TextBlock>
    </Container>
  )
}
