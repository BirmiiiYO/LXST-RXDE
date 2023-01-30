import React from 'react'

import { Button } from 'components/UI/Button'

import { Container, Info, List, Name, Price, Text } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({ name, value, text, infos }: IPriceCardProps) => (
  <Container>
    <Name>{name}</Name>
    <Price>{value}</Price>
    <Text>{text}</Text>
    <Button type="small">Get started</Button>
    <List>
      {infos.map(info => (
        <Info>{info}</Info>
      ))}
    </List>
  </Container>
)
