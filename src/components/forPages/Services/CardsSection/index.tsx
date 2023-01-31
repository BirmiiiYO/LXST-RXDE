import React from 'react'

import { ServiceCard } from 'components/UI/Cards/Service'
import { cards } from 'mocks/homePage/ServiceCards'

import { Cards } from './styles'

export const CardsSection = () => (
  <Cards>
    {cards.map(({ icon, id, text, title }) => (
      <ServiceCard icon={icon} text={text} title={title} key={id} />
    ))}
  </Cards>
)
