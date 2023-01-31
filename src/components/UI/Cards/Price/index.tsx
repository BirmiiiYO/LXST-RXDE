import React from 'react'

import { Button } from 'components/UI/Button'
import { theme } from 'styles/themes'

import { Container, Info, List, Name, Price } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({
  name,
  value,
  infos,
  active,
  onClick,
}: IPriceCardProps) => (
  <Container active={active} onClick={onClick}>
    <Name>{name}</Name>
    <Price>{value}</Price>
    <Button
      type="small"
      background={active ? theme.colors.white : ''}
      color={active ? theme.colors.primary : ''}
    >
      Get started
    </Button>
    <List>
      {infos.map(info => (
        <Info>{info}</Info>
      ))}
    </List>
  </Container>
)
