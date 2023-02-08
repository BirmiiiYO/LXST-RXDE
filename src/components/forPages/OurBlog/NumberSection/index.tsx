import React from 'react'
import { useTranslation } from 'react-i18next'

import { CompanyOverviewSection } from 'components/CompanyOverviewSection'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'
import { theme } from 'styles/themes'

export const NumberSection = () => {
  const { t } = useTranslation()
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const blocks = t('aboutUsPage.data', { returnObjects: true }) as []
  return (
    <Container flex="center" background="aliceBlue" padding="100px 0">
      <Container flex="column" width="1110px" background="aliceBlue">
        <Text margin="0 auto">{t('aboutUsPage.inNumbers')}</Text>
        <CompanyOverviewSection
          blocks={!isMobile ? blocks : blocks.slice(0, 3)}
        />
      </Container>
    </Container>
  )
}
