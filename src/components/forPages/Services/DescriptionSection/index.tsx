import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'components/UI/Text'

import { Container } from './styles'

export const DescriptionSection = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Text typography="BHeadline6" color="primary">
        Services
      </Text>
      <Text margin="15px 0">{t('servicePage.title')}</Text>
      <Text typography="RParagraph2" color="grey" maxWidth="600px">
        {t('servicePage.text')}
      </Text>
    </Container>
  )
}
