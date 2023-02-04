import React from 'react'

import right from './right.svg'
import { CustomLink, Image } from './styles'
import { ILinkProps } from './types'

export const Link = ({ disabled, icon, children }: ILinkProps) => (
  <CustomLink disabled={disabled}>
    {children}
    {icon && <Image src={right} alt="zxc" />}
  </CustomLink>
)
