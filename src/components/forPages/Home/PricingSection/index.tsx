import React, { useState } from 'react'

import { PriceCard } from 'components/UI/Cards/Price'
import { cards } from 'mocks/homePage/PriceCards'

import { Cards, Container, Title } from './styles'

export const PricingSection = () => {
  const [activePrice, setActivePrice] = useState('Free trial')
  return (
    <Container>
      <Title>Our pricing</Title>
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
