import React, { FC } from 'react'

import { PageHeaderContainer, SubTitleContainer } from './styles'
import { IPageHeaderProps } from './types'
import { Text } from '../Text'

export const PageHeader: FC<IPageHeaderProps> = ({
  background = 'white',
  subtitle,
  title,
}) => (
  <PageHeaderContainer background={background}>
    <Text typography="EbHeadline1" сenter>
      {title}
    </Text>
    <SubTitleContainer>
      {subtitle.map(text => (
        <Text typography="MHeadline7" color="grey">
          {text}
        </Text>
      ))}
    </SubTitleContainer>
  </PageHeaderContainer>
)
