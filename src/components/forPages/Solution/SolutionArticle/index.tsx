import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { DotIcon } from 'assets'
import { Text } from 'components/UI/Text'

import { ArticleContainer, Image, InfoContainer, List } from './styles'
import { ISolutionArticleProps } from './types'

export const SolutionArticle: FC<ISolutionArticleProps> = ({ blocks }) => {
  const { t } = useTranslation()
  return (
    <ArticleContainer id="solution">
      {blocks.map(({ extraList, icon, title }) => (
        <InfoContainer id="title">
          <Text typography="EbHeadline2" margin="0 0 30px 0">
            {title}
          </Text>
          {icon && <Image src={icon} alt={`${title}`} />}
          <Text typography="RParagraph1" color="grey">
            {t('base.largeText')}
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
}
