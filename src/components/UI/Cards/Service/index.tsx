import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Icon, Text, Title } from './styles'
import { IdvantageServiceCardProps } from './types'

export const ServiceCard = ({
  icon,
  text,
  title,
  id,
}: IdvantageServiceCardProps) => {
  const navigate = useNavigate()
  const changePage = () => {
    navigate(`/services/${id}`)
  }
  return (
    <Container onClick={changePage}>
      <Icon src={icon} alt="logo of services card" />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}
