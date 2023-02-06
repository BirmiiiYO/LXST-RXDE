import React from 'react'

import {
  BehanceIcon,
  DribbbleIcon,
  FacebookIcon,
  InstIcon,
  TwitterIcon,
  WhiteLogo,
  YoutubeIcon,
} from 'assets'
import { Container } from 'components/UI/Container'
import { SideBar } from 'components/UI/SideBar'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Icon, Logo, Mobile } from './styles'

const icons = [
  <BehanceIcon />,
  <DribbbleIcon />,
  <FacebookIcon />,
  <YoutubeIcon />,
  <TwitterIcon />,
  <InstIcon />,
]
export const MobileFooter = () => (
  <Container flex="column">
    <WhiteLogo />
    <SideBar onClick={() => console.log('zxc')}>Quick line</SideBar>
    <SideBar onClick={() => console.log('zxc')}>Service</SideBar>
    <SideBar onClick={() => console.log('zxc')}>Contact info</SideBar>
    <Container flex="space-between">
      <Text typography={theme.typography.R_PARAGRAPH_3} color="white">
        Follow us
      </Text>
      {icons.map(icon => icon)}
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
