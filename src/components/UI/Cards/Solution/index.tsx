import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/UI/Button'

import { Container, Info, Title } from './styles'
import { ISolutionProps } from './types'

export const SolutionCard = ({ advantages, title, id }: ISolutionProps) => {
  const navigate = useNavigate()
  const changePage = () => {
    navigate(`/solutions/${id}`)
  }
  return (
    <Container onClick={changePage}>
      <Title>{title}</Title>
      {advantages.map(item => (
        <Info>{item}</Info>
      ))}
      <Button buttonType="primary">Read more</Button>
    </Container>
  )
}
