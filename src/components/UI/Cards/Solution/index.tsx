import React from 'react'

import { Link } from 'components/UI/Link'

import { Container, Info, Title } from './styles'
import { ISolutionProps } from './types'

export const SolutionCard = ({ advantages, title, id }: ISolutionProps) => (
  <Container>
    <Title>{title}</Title>
    {advantages.map(item => (
      <Info>{item}</Info>
    ))}
    <Link to={`/solutions/${id}`} icon>
      Read more
    </Link>
  </Container>
)
