import React from 'react'

import {
  Avatar,
  Container,
  Info,
  Name,
  NameAndPos,
  Position,
  Text,
} from './styles'
import { IReviewProps } from './types'

export const ReviewCard = ({ name, position, avatar, text }: IReviewProps) => (
  <Container>
    <Info>
      <Avatar src={avatar} alt="avatar" />
      <NameAndPos>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </NameAndPos>
    </Info>
    <Text>{text}</Text>
  </Container>
)
