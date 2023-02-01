import React from 'react'

import { CustomLink } from './styles'
import { ILinkProps } from './types'

export const Link = ({ disabled, icon, children }: ILinkProps) => (
  <CustomLink icon={icon}>{children}</CustomLink>
)
