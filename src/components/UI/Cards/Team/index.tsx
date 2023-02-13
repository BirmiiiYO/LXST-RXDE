import React from 'react'

import { Container, Info, Name, Position } from './styles'
import { ITeamProps } from './types'

export const TeamCard = ({ avatar, name, position, viewMore }: ITeamProps) => (
  <Container avatar={avatar} onClick={viewMore}>
    <Info>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Info>
  </Container>
)
