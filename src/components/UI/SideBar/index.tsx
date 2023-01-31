import React from 'react'

import tab from './category-tab.svg'
import { CustomSideBar, Icon } from './styles'
import { ISideBarProps } from './types'

export const SideBar = ({
  children,
  onClick,
  disabled = false,
}: ISideBarProps) => (
  <CustomSideBar onClick={onClick} disabled={disabled}>
    {children}
    <Icon src={tab} alt="tab icon" />
  </CustomSideBar>
)
