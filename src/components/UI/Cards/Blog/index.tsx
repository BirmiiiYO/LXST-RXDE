import React from 'react'

import { Container, Date, Icon, List, Text, Title, Topic } from './styles'
import { IBlogCardProps } from './types'

export const BlogCard = ({
  date,
  image,
  text,
  title,
  topics,
}: IBlogCardProps) => (
  <Container>
    <Icon src={image} alt="logo of services card" />
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <List>
      {' '}
      {topics.map(topic => (
        <Topic>{topic}</Topic>
      ))}
    </List>
  </Container>
)
