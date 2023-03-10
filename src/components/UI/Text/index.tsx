import React from 'react'

import { CustomTitle } from './styles'
import { ITextProps } from './types'

export const Text = ({
  margin = '0',
  maxWidth = '100%',
  padding = '0',
  color = 'black',
  typography = 'EbHeadline1',
  children,
  center: сenter = false,
}: ITextProps) => (
  <CustomTitle
    color={color}
    typography={typography}
    maxWidth={maxWidth}
    padding={padding}
    margin={margin}
    center={сenter}
  >
    {children}
  </CustomTitle>
)
