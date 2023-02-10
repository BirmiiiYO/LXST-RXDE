import React, { useState } from 'react'

import { footerIcons } from 'assets'
import WhiteLogo from 'assets/images/Logo.png'
import { Container } from 'components/UI/Container'
import { SideBar } from 'components/UI/SideBar'
import { Text } from 'components/UI/Text'

import { Logo } from './styles'

export const MobileFooter = () => {
  const [open, setOpen] = useState(false)

  const changeOpenBlock = () => {
    setOpen(!open)
  }

  return (
    <Container flex="column" background="secondary" padding="10px">
      <Logo src={WhiteLogo} alt="logo" />
      <SideBar onClick={changeOpenBlock}>Quick line</SideBar>
      {open && <h1>zxc</h1>}
      <SideBar onClick={changeOpenBlock}>Service</SideBar>
      <SideBar onClick={changeOpenBlock}>Contact info</SideBar>
      <Container flex="space-between" background="secondary" padding="10px">
        <Text typography="RParagraph3" color="white">
          Follow us
        </Text>
        <Container background="secondary">
          {footerIcons.map(icon => icon)}
        </Container>
      </Container>
      <Container flex="space-between" background="secondary" padding="10px">
        <Text typography="RParagraph3" color="white">
          Privacy policy
        </Text>
        <Text typography="RParagraph3" color="white">
          Terms of us
        </Text>
      </Container>
      <Text typography="RParagraph3" color="steelTeal">
        Ensome© 2022 All Rights Reserved
      </Text>
    </Container>
  )
}
