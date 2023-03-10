import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'components/UI/Text'

import { Amount, Container, Data, HowMuch, Name, SpaceBetween } from './styles'

export const CompanyOverviewSection = () => {
  const { t } = useTranslation()
  const overviews = t('aboutUsPage.data', {
    returnObjects: true,
  }) as []
  return (
    <Container>
      <Text typography="EbHeadline2" margin="120px 0 50px 0">
        {t('companyOverviewSection.title')}
      </Text>
      <SpaceBetween>
        <Data>
          {overviews.slice(0, 3).map(({ amount, name }) => (
            <HowMuch>
              <Amount>{amount}</Amount>
              <Name>{name}</Name>
            </HowMuch>
          ))}
        </Data>
        <Text typography="RParagraph2" color="grey" maxWidth="450px">
          {t('base.mediumText')}
        </Text>
      </SpaceBetween>
    </Container>
  )
}
