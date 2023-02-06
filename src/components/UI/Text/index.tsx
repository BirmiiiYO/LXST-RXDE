import React from 'react'

import { theme } from 'styles/themes'

import { CustomTitle } from './styles'
import { ITextProps } from './types'

export const Text = ({
  margin = '0',
  maxWidth = '100%',
  padding = '0',
  color = theme.colors.black,
  typography,
  children,
  сenter = false,
}: ITextProps) => (
  <CustomTitle
    color={color}
    typography={typography}
    maxWidth={maxWidth}
    padding={padding}
    margin={margin}
    сenter={сenter}
  >
    {children}
  </CustomTitle>
)
