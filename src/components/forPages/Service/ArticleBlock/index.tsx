import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CheckMarkIcon } from 'assets'
import { Text } from 'components/UI/Text'

import {
  Block,
  ExtraBlock,
  ExtraList,
  Image,
  ImageBlock,
  MainContainer,
} from './styles'
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
          <ImageBlock>
            {icon && (
              <Image
                src={icon}
                alt={title}
                isExtraList={extraList.length > 0}
              />
            )}
            <ExtraList>
              {extraList.length > 0 &&
                extraList.map(item => (
                  <ExtraBlock>
                    <CheckMarkIcon />
                    {item}
                  </ExtraBlock>
                ))}
            </ExtraList>
          </ImageBlock>
        </Block>
      ))}
    </MainContainer>
  )
}
