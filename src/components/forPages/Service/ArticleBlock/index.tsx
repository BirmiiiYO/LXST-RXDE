import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'components/UI/Text'

import { Block, ExtraBlock, Image, MainContainer } from './styles'
import { IArticleBlockProps } from './types'

export const ArticleBlock: FC<IArticleBlockProps> = ({ blocks }) => {
  const { t } = useTranslation()
  return (
    <MainContainer>
      {blocks.map(({ extraList, icon, title }) => (
        <Block>
          <Text typography="EbHeadline3" margin="0 0 30px 0">
            {title}
          </Text>
          <Text typography="RParagraph2" color="grey">
            {t('base.mediumText')}
          </Text>
          {icon && <Image src={icon} alt={title} />}
          {extraList.length > 0 &&
            extraList.map(item => <ExtraBlock>{item}</ExtraBlock>)}
        </Block>
      ))}
    </MainContainer>
  )
}
