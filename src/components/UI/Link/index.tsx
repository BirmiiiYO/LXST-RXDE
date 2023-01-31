import React from 'react'

import { CustomLink } from './styles'
import { ILinkProps } from './types'

export const Link = ({ disabled, withIcon, children }: ILinkProps) => (
  <CustomLink icon={withIcon} disabled={disabled}>
    {children}
  </CustomLink>
)
