import React from 'react'
import { useTranslation } from 'react-i18next'

import { ServiceCard } from 'components/UI/Cards/Service'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { cards } from 'mocks/homePage/ServiceCards'
import { theme } from 'styles/themes'

import { Cards, Content, Info } from './styles'

export const BenefitsSection = () => {
  const { t } = useTranslation()
  return (
    <Container color={theme.colors.black} background={theme.colors.aliceBlue}>
      <Content>
        <Info>
          <Text typography={theme.typography.EB_HEADLINE_2} margin="0 0 30px 0">
            {t('homePage.benefit')}
          </Text>
          <Text
            typography={theme.typography.R_PARAGRAPH_2}
            color={theme.colors.grey}
          >
            {t('base.largeText')}
          </Text>
        </Info>
        <Cards>
          {cards.map(({ icon, id, text, title }) => (
            <ServiceCard icon={icon} text={text} title={title} key={id} />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}
