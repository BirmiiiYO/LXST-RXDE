import React, { useState } from 'react'

import { PriceCard } from 'components/UI/Cards/Price'
import { Title } from 'components/UI/Title'
import { cards } from 'mocks/homePage/PriceCards'
import { theme } from 'styles/themes'

import { Cards, Container } from './styles'

export const PricingSection = () => {
  const [activePrice, setActivePrice] = useState('Free trial')
  return (
    <Container>
      <Title typography={theme.typography.EB_HEADLINE_2} margin="0 0 50px 0">
        Our pricing
      </Title>
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
