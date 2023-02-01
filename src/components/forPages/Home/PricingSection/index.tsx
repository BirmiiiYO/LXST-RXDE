import React, { useState } from 'react'

import { PriceCard } from 'components/UI/Cards/Price'
import { Text } from 'components/UI/Text'
import { cards } from 'mocks/homePage/PriceCards'
import { theme } from 'styles/themes'

import { Cards, Container } from './styles'

export const PricingSection = () => {
  const [activePrice, setActivePrice] = useState('Free trial')
  return (
    <Container>
      <Text typography={theme.typography.EB_HEADLINE_2} margin="0 0 50px 0">
        Our pricing
      </Text>
      <Cards>
        {cards.map(({ id, infos, name, value }) => (
          <PriceCard
            onClick={() => setActivePrice(name)}
            infos={infos}
            name={name}
            value={value}
            key={id}
            active={name === activePrice}
          />
        ))}
      </Cards>
    </Container>
  )
}
