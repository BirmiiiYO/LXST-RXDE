import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightIcon } from 'assets/svg/icons'

import { CustomLink } from './styles'
import { ILinkProps } from './types'

export const Link = ({
  disabled = false,
  icon,
  children,
  to = '/',
}: ILinkProps) => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(to)
  }
  return (
    <CustomLink onClick={navigateTo} disabled={disabled}>
      {children}
      {icon && <RightIcon />}
    </CustomLink>
  )
}
