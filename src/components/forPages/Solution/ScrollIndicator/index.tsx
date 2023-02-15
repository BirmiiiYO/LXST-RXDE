import React, { FC, useState } from 'react'

import { ScrollContainer, Tab } from './styles'
import { IScrollIndicatorProps } from './types'

export const ScrollIndicator: FC<IScrollIndicatorProps> = ({
  tabs,
  active,
}) => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <ScrollContainer id="tab">
      {tabs.map(tab => (
        <Tab active={active === tab}>{tab}</Tab>
      ))}
    </ScrollContainer>
  )
}
