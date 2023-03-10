import React from 'react'

import { StyledTag } from './styles'
import { ITagProps } from './types'

export const Tag = ({ children, disabled = false }: ITagProps) => (
  <StyledTag disabled={disabled}>{children}</StyledTag>
)
