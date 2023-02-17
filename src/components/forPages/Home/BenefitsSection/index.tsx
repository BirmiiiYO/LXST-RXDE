import React from 'react'
import { useTranslation } from 'react-i18next'

import { ServiceCard } from 'components/UI/Cards/Service'
import { Container } from 'components/UI/Container'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

import { Cards, Content, Info } from './styles'

export const BenefitsSection = () => {
  const { t } = useTranslation()
  const cards = t('cards.service', { returnObjects: true }) as []
  return (
    <Section backgroundColor="aliceBlue">
      <Container padding="120px 0" background="aliceBlue">
        <Info>
          <Text typography="EbHeadline2" margin="0 0 30px 0" >
            {t('homePage.ourBlogTitle')}
          </Text>
          <Text typography="RParagraph2" color="grey">
            {t('base.largeText')}
          </Text>
        </Info>
        <Cards>
          {cards.slice(0, 4).map(({ icon, id, text, title }) => (
            <ServiceCard
              icon={icon}
              text={t('base.smallText')}
              title={title}
              key={id}
              id={id}
            />
          ))}
        </Cards>
      </Container>
    </Section>
  )
}
