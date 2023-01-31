import React from 'react'

import { Button } from 'components/UI/Button'

import { Container, Info, List, Name, Price } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({ name, value, infos, active }: IPriceCardProps) => (
  <Container active={active}>
    <Name>{name}</Name>
    <Price>{value}</Price>
    <Button type="watch">Get started</Button>
    <List>
      {infos.map(info => (
        <Info>{info}</Info>
      ))}
    </List>
  </Container>
)
