import React from 'react'

import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import behance_icon from 'assets/svg/socialsIcons/behance_icon.svg'
import dribbble_icon from 'assets/svg/socialsIcons/dribbble_icon.svg'
import fb_icon from 'assets/svg/socialsIcons/facebook_icon.svg'
import inst_icon from 'assets/svg/socialsIcons/inst_icon.svg'
import twitter_icon from 'assets/svg/socialsIcons/twitter_icon.svg'
import youtube_icon from 'assets/svg/socialsIcons/youtube_icon.svg'
import { Container } from 'components/UI/Container'
import { SideBar } from 'components/UI/SideBar'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Icon, Logo, Mobile } from './styles'

const icons = [
  behance_icon,
  fb_icon,
  youtube_icon,
  dribbble_icon,
  twitter_icon,
  inst_icon,
]
export const MobileFooter = () => (
  <Container flex="column">
    <Logo src={whiteLogo} alt="footer logo" />
    <SideBar onClick={() => console.log('zxc')}>Quick line</SideBar>
    <SideBar onClick={() => console.log('zxc')}>Service</SideBar>
    <SideBar onClick={() => console.log('zxc')}>Contact info</SideBar>
    <Container flex="space-between">
      <Text typography={theme.typography.R_PARAGRAPH_3} color="white">
        Follow us
      </Text>
      {icons.map(icon => (
        <Icon src={icon} />
      ))}
    </Container>
    <Container flex="space-between">
      <Text typography={theme.typography.R_PARAGRAPH_3} color="white">
        Privacy policy
      </Text>
      <Text typography={theme.typography.R_PARAGRAPH_3} color="white">
        Terms of us
      </Text>
    </Container>
    Ensome© 2022 All Rights Reserved
  </Container>
)
