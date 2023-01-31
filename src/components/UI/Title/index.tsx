import React from 'react'

import { CustomTitle } from './styles'
import { ITitleProps } from './types'

export const Title = ({
  margin = '0',
  maxWidth = '100%',
  padding = '0',
  typography,
  children,
}: ITitleProps) => (
  <CustomTitle
    typography={typography}
    maxWidth={maxWidth}
    padding={padding}
    margin={margin}
  >
    {children}
  </CustomTitle>
)
