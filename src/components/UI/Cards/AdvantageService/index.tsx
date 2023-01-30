import React from 'react'

import { Button } from 'components/UI/Button'

import { Container, Icon, Text, Title } from './styles'
import { IdvantageServiceCardProps } from './types'

export const AdvantageServiceCard = ({
  icon,
  text,
  title,
}: IdvantageServiceCardProps) => (
  <Container>
    <Icon src={icon} alt="logo of services card" />
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Container>
)
