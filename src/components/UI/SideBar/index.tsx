import React from 'react'

import { TabIcon } from 'assets/index'

import { CustomSideBar } from './styles'
import { ISideBarProps } from './types'

export const SideBar = ({
  children,
  onClick,
  disabled = false,
}: ISideBarProps) => (
  <CustomSideBar onClick={onClick}>
    {children}
    <TabIcon />
  </CustomSideBar>
)
