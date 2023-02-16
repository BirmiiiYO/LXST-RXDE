import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Tag } from 'components/UI/Tag'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'

import { Container, Icon, InfoBlock, List } from './styles'
import { IBlogCardProps } from './types'

export const BlogCard = ({
  date,
  image,
  title,
  topics,
  id,
  size = 'default',
}: IBlogCardProps) => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const changePage = () => {
    navigate(`/blog/${id}`)
  }
  return (
    <Container onClick={changePage} size={size}>
      <Icon src={image} alt="logo of services card" size={size} />
      <InfoBlock size={size}>
        {' '}
        <Text
          typography="RParagraph3"
          color="grey"
          margin={size === 'default' ? '30px 0 17px 35px' : '5px'}
        >
          {date}
        </Text>
        <Text
          typography={size === 'default' ? 'BHeadline4' : 'BHeadline6'}
          margin={size === 'default' ? '0 35px 15px 25px' : '5px'}
        >
          {title}
        </Text>
        {!isMobile && size === 'default' && (
          <Text
            typography="RParagraph2"
            color="grey"
            maxWidth="500px"
            margin="0 0 0 25px"
          >
            {t('base.smallText')}
          </Text>
        )}
        {size === 'default' && (
          <List>
            {' '}
            {topics.map(topic => (
              <Tag>{topic}</Tag>
            ))}
          </List>
        )}
      </InfoBlock>
    </Container>
  )
}
