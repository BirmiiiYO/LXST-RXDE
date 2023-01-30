import React from 'react'

import { Button } from 'components/UI/Button'

import { Container, Info, Title } from './styles'
import { ISolutionProps } from './types'

export const SolutionCard = ({ advantages, title }: ISolutionProps) => (
  <Container>
    <Title>{title}</Title>
    {advantages.map(item => (
      <Info>{item}</Info>
    ))}
    <Button type="small">Read more</Button>
  </Container>
)
