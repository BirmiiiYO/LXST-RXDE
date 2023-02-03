import React from 'react'
import { useTranslation } from 'react-i18next'

import { CompanyOverviewSection } from 'components/CompanyOverviewSection'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

export const NumberSection = () => {
  const { t } = useTranslation()
  const blocks = t('aboutUsPage.data', { returnObjects: true }) as []
  return (
    <Container
      flex="center"
      background={theme.colors.aliceBlue}
      padding="100px 0"
    >
      <Container flex="column" width="1110px">
        <Text typography={theme.typography.EB_HEADLINE_1} margin="0 auto">
          {t('aboutUsPage.inNumbers')}
        </Text>
        <CompanyOverviewSection blocks={blocks} />
      </Container>
    </Container>
  )
}