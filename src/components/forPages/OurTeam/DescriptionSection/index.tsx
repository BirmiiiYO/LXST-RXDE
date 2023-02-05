import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

export const DescriptionSection = () => {
  const { t } = useTranslation()
  return (
    <Container flex="space-between" padding="120px 0 90px 0">
      <Text typography={theme.typography.EB_HEADLINE_1} color="white">
        {t('ourTeamPage.title')}
      </Text>
      <Text
        typography={theme.typography.R_PARAGRAPH_3}
        maxWidth="540px"
        color={theme.colors.aliceBlue}
      >
        {t('ourTeamPage.text')}
      </Text>
    </Container>
  )
}
