import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { PriceCard } from 'components/UI/Cards/Price'
import { Text } from 'components/UI/Text'

import { Cards, PriceContainer } from './styles'

export const PricingSection = () => {
  const { t } = useTranslation()
  const cards = t('cards.price', { returnObjects: true }) as []
  const [activeCard, setActiveCard] = useState<number>()
  return (
    <PriceContainer id="priceSection">
      <Text typography="EbHeadline2" margin="0 0 50px 0">
        {t('homePage.ourPricingTitle')}
      </Text>
      <Cards>
        {cards.map(({ id, infos, name, value }) => (
          <PriceCard
            onClick={() => setActiveCard(id)}
            infos={infos}
            name={name}
            value={value}
            key={id}
            active={id === activeCard}
          />
        ))}
      </Cards>
    </PriceContainer>
  )
}
