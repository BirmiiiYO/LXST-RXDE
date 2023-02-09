/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { RightIcon } from 'assets'
import { links } from 'constants/links'

import { Item, List } from './styles'

export const DropDown = () => (
  <List>
    {links.map(({ href, name }) => (
      <Item to={href}>
        {name} <RightIcon />
      </Item>
    ))}
  </List>
)
