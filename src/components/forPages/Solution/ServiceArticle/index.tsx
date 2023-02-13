import React, { FC } from 'react'

import { Text } from 'components/UI/Text'

import { IServiceArticleProps } from './types'

export const ServiceArticle: FC<IServiceArticleProps> = ({ blocks }) => (
  <div>
    {blocks.map(({ extraList, icon, text, title }) => (
      <div>
        <Text typography="EbHeadline2">{title}</Text>
        {icon && <img src={icon} alt={`${title}`} />}
        <Text typography="RParagraph1" color="grey">
          {text}
        </Text>
        {extraList.length > 0 &&
          extraList.map(({ extraTitle, extraText }) => (
            <div>
              *<Text typography="RParagraph1">{extraTitle}</Text> -{' '}
              <Text typography="RParagraph1" color="grey">
                {' '}
                {extraText}
              </Text>
            </div>
          ))}
      </div>
    ))}
  </div>
)
