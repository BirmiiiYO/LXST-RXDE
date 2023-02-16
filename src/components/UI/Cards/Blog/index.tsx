import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'hooks/Redux'

import { Container, Date, Icon, List, Text, Title, Topic } from './styles'
import { IBlogCardProps } from './types'

export const BlogCard = ({
  date,
  image,
  text,
  title,
  topics,
  id,
}: IBlogCardProps) => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const changePage = () => {
    navigate(`/blog/${id}`)
  }
  return (
    <Container onClick={changePage}>
      <Icon src={image} alt="logo of services card" />
      <Date>{date}</Date>
      <Title>{title}</Title>
      {!isMobile && <Text>{t('base.smallText')}</Text>}
      <List>
        {' '}
        {topics.map(topic => (
          <Topic>{topic}</Topic>
        ))}
      </List>
    </Container>
  )
}
