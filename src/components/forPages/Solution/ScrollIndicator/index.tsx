import React, { FC } from 'react'

import { IScrollIndicatorProps } from './types'

export const ScrollIndicator: FC<IScrollIndicatorProps> = ({ tabs }) => (
  <div>
    {tabs.map(tab => (
      <div>{tab}</div>
    ))}
  </div>
)
