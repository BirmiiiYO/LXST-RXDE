import React from 'react'

import { TabIcon } from 'assets/index'

import { CustomSideBar } from './styles'
import { ISideBarProps } from './types'

export const SideBar = ({
  children,
  onClick,
  color = 'black',
}: ISideBarProps) => (
  <CustomSideBar onClick={onClick} color={color}>
    {children}
    <TabIcon />
  </CustomSideBar>
)
