import React from 'react'

import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import behance_icon from 'assets/svg/socialsIcons/behance_icon.svg'
import dribbble_icon from 'assets/svg/socialsIcons/dribbble_icon.svg'
import fb_icon from 'assets/svg/socialsIcons/facebook_icon.svg'
import inst_icon from 'assets/svg/socialsIcons/inst_icon.svg'
import twitter_icon from 'assets/svg/socialsIcons/twitter_icon.svg'
import youtube_icon from 'assets/svg/socialsIcons/youtube_icon.svg'
import { Title } from 'components/UI/Title'
import { links } from 'constants/links'
import { theme } from 'styles/themes'

import {
  Block,
  Container,
  Content,
  CustomLink,
  Icon,
  Icons,
  Information,
  Logo,
  PrivacyInfo,
  SpaceBetween,
  Text,
} from './styles'

const icons = [
  behance_icon,
  fb_icon,
  youtube_icon,
  dribbble_icon,
  twitter_icon,
  inst_icon,
]
const contacts = [
  'ensome@info.co.us',
  '+1 601-201-5580',
  '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
]
const services = ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map']

export const Footer = () => (
  <Container>
    <Content>
      <Information>
        <Block>
          <Logo src={whiteLogo} alt="footer logo" />
          <Text>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </Text>
          <Icons>
            {' '}
            {icons.map(icon => (
              <Icon src={icon} />
            ))}
          </Icons>
        </Block>
        <Block>
          <Title typography={theme.typography.B_HEADLINE_6} margin="0 0 31px 0">
            Quick link
          </Title>
          {links.map(({ name }) => (
            <Text>
              <CustomLink to="/">{name}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Title typography={theme.typography.B_HEADLINE_6} margin="0 0 31px 0">
            Service
          </Title>
          {services.map(link => (
            <Text>
              <CustomLink to="/">{link}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Title typography={theme.typography.B_HEADLINE_6} margin="0 0 31px 0">
            Cantact info
          </Title>
          {contacts.map(link => (
            <Text>{link}</Text>
          ))}
        </Block>
      </Information>
      <PrivacyInfo>
        <Text>Ensome© 2022 All Rights Reserved</Text>
        <SpaceBetween>
          <Text>Privacy policy</Text>
          <Text>Terms of us</Text>
        </SpaceBetween>
      </PrivacyInfo>
    </Content>
  </Container>
)
