import React from 'react'
import { useLocation } from 'react-router-dom'

import { links } from 'constants/links'

import { CustomLink, Nav } from './styles'

export const Navigation = () => {
  const { pathname } = useLocation()
  return (
    <Nav>
      {links.map(({ href, name }) => (
        <CustomLink to={href} key={href} active={pathname === href}>
          {name}
        </CustomLink>
      ))}
    </Nav>
  )
}
