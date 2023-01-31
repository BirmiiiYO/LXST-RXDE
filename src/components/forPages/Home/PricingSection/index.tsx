import React from 'react'

import { PriceCard } from 'components/UI/Cards/Price'
import { cards } from 'mocks/homePage/PriceCards'

import { Cards, Container, Title } from './styles'

export const PricingSection = () => (
  <Container>
    <Title>Our pricing</Title>
    <Cards>
      {cards.map(({ id, infos, name, text, value }) => (
        <PriceCard
          infos={infos}
          name={name}
          text={text}
          value={value}
          key={id}
        />
      ))}
    </Cards>
  </Container>
)
