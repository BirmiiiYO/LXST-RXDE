import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Amount, Container, Data, HowMuch, Name, SpaceBetween } from './styles'

const overviews = [
  { amount: '1830+', name: 'Project executed' },
  { amount: '834+', name: 'Satisfied customers' },
  { amount: '390', name: 'Data management' },
]

export const CompanyOverviewSection = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Text typography={theme.typography.EB_HEADLINE_2} margin="120px 0 50px 0">
        {t('homePage.overviewTitle')}
      </Text>
      <SpaceBetween>
        <Data>
          {overviews.map(({ amount, name }) => (
            <HowMuch>
              <Amount>{amount}</Amount>
              <Name>{name}</Name>
            </HowMuch>
          ))}
        </Data>
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
          maxWidth="450px"
        >
          {t('base.mediumText')}
        </Text>
      </SpaceBetween>
    </Container>
  )
}
