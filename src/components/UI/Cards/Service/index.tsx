import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Text } from 'components/UI/Text'

import { Container, Icon } from './styles'
import { IServiceCardProps } from './types'

export const ServiceCard = ({ icon, text, title, id }: IServiceCardProps) => {
  const navigate = useNavigate()
  const changePage = () => {
    navigate(`/services/${id}`)
  }
  return (
    <Container onClick={changePage}>
      <Icon src={icon} alt="logo of services card" />
      <Text typography="BHeadline5" margin="10px 0 5px 0">
        {title}
      </Text>
      <Text typography="RParagraph3" color="grey" margin="0 0 15px 0">
        {text}
      </Text>
    </Container>
  )
}
