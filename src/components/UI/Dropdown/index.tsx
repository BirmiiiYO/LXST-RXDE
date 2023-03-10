import React from 'react'

import { RightIcon } from 'assets/svg/icons'
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
