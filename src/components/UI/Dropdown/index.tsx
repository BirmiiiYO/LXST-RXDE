/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { links } from 'constants/links'

import { Item, List } from './styles'

export const DropDown = () => (
  <List>
    {links.map(({ href, name }) => (
      <Item to={href}>{name}</Item>
    ))}
  </List>
)
