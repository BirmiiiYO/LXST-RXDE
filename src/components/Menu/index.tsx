import React, { useState } from 'react'

import MenuIcon from 'assets/Menu.svg'
import { DropDown } from 'components/Dropdown'

import { Icon, StyledMenu } from './styles'

export const Menu = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }
  return (
    <StyledMenu>
      <Icon src={MenuIcon} alt="menu" onClick={toggleActive} />
      {active && <DropDown />}
    </StyledMenu>
  )
}
