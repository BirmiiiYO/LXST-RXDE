import React, { FC } from 'react'

import { ScrollContainer, Tab } from './styles'
import { IScrollIndicatorProps } from './types'

export const ScrollIndicator: FC<IScrollIndicatorProps> = ({
  tabs,
  active,
}) => (
  <ScrollContainer>
    {tabs.map(tab => (
      <Tab active={active === tab}>{tab}</Tab>
    ))}
  </ScrollContainer>
)
