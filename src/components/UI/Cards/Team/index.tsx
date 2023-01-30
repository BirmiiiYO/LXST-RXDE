import React from 'react'

import { Container, Name, Position } from './styles'
import { ITeamProps } from './types'

export const TeamCard = ({ avatar, name, position }: ITeamProps) => (
  <Container background={avatar}>
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Container>
)
