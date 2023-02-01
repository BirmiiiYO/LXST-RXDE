/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { dropDownLinks } from 'constants/links'

import { Item, List } from './styles'
import { Link } from '../Link'

export const DropDown = () => (
  <List>
    {dropDownLinks.map(({ href, name }) => (
      <Item to={href}>{name}</Item>
    ))}
  </List>
)
