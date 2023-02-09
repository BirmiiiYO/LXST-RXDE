import React, { useState } from 'react'

import { MenuIcon } from 'assets'
import { DropDown } from 'components/UI/Dropdown'

import { StyledMenu } from './styles'

export const Menu = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }
  return (
    <StyledMenu>
      <MenuIcon onClick={toggleActive} />
      {active && <DropDown />}
    </StyledMenu>
  )
}
