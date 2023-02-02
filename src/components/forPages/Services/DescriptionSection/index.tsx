import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Container } from './styles'

export const DescriptionSection = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Text
        typography={theme.typography.B_HEADLINE_6}
        color={theme.colors.primary}
      >
        Services
      </Text>
      <Text typography={theme.typography.EB_HEADLINE_1} margin="15px 0">
        {t('servicePage.title')}
      </Text>
      <Text
        typography={theme.typography.R_PARAGRAPH_2}
        color={theme.colors.grey}
        maxWidth="730px"
      >
        {t('servicePage.text')}
      </Text>
    </Container>
  )
}
