import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { DateIcon } from 'assets'
import { Tag } from 'components/UI/Tag'
import { Text } from 'components/UI/Text'

import {
  BlogContainer,
  Date,
  Image,
  InfoContainer,
  Share,
  Tags,
  Views,
} from './styles'
import { IBlogArticleProps } from './types'

export const BlogArticle: FC<IBlogArticleProps> = ({
  date,
  image,
  share,
  title,
  topics,
  views,
}) => {
  const { t } = useTranslation()
  return (
    <BlogContainer>
      <Image src={image} />
      <Date>
        <DateIcon />
        {date}
      </Date>
      <Text typography="EbHeadline3">{title}</Text>
      <Text typography="RParagraph2" color="grey" margin="30px 0">
        {t('blogPage.fullText')}
      </Text>
      <InfoContainer>
        <Views>{views} Views</Views>
        <Share>
          Share:{' '}
          {share.map(({ link, name }) => (
            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </Share>
        <Tags>
          {' '}
          Tags:{' '}
          {topics.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
      </InfoContainer>
    </BlogContainer>
  )
}
