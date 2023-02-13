import React, { FC } from 'react'

import { DotIcon } from 'assets'
import { Text } from 'components/UI/Text'

import { ArticleContainer, Image, InfoContainer, List } from './styles'
import { IServiceArticleProps } from './types'

export const ServiceArticle: FC<IServiceArticleProps> = ({ blocks }) => (
  <ArticleContainer>
    {blocks.map(({ extraList, icon, text, title }) => (
      <InfoContainer>
        <Text typography="EbHeadline2" margin="0 0 30px 0">
          {title}
        </Text>
        {icon && <Image src={icon} alt={`${title}`} />}
        <Text typography="RParagraph1" color="grey">
          {text}
        </Text>
        {extraList.length > 0 &&
          extraList.map(({ extraTitle, extraText }) => (
            <List>
              <DotIcon /> {extraTitle} - {extraText}
            </List>
          ))}
      </InfoContainer>
    ))}
  </ArticleContainer>
)
