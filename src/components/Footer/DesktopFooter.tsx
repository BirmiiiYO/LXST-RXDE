import React from 'react'
import { useTranslation } from 'react-i18next'

import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import behance_icon from 'assets/svg/socialsIcons/behance_icon.svg'
import dribbble_icon from 'assets/svg/socialsIcons/dribbble_icon.svg'
import fb_icon from 'assets/svg/socialsIcons/facebook_icon.svg'
import inst_icon from 'assets/svg/socialsIcons/inst_icon.svg'
import twitter_icon from 'assets/svg/socialsIcons/twitter_icon.svg'
import youtube_icon from 'assets/svg/socialsIcons/youtube_icon.svg'
import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { links } from 'constants/links'
import { theme } from 'styles/themes'

import {
  Block,
  Content,
  CustomLink,
  Icon,
  Icons,
  Information,
  Logo,
  PrivacyInfo,
  SpaceBetween,
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

const languages = [
  { lng: 'en', nativeName: 'English' },
  { lng: 'de', nativeName: 'Deutsch' },
  { lng: 'fr', nativeName: 'Français' },
  { lng: 'ru', nativeName: 'Русский' },
]

export const DesktopFooter = () => {
  const { t, i18n } = useTranslation()
  const services = t('footer.services', { returnObjects: true }) as []
  return (
    <Content>
      <Information>
        <Block>
          <Logo src={whiteLogo} alt="footer logo" />
          <Text
            typography={theme.typography.R_PARAGRAPH_3}
            color={theme.colors.grey}
            maxWidth="285px"
          >
            {t('base.smallText')}
          </Text>
          <Icons>
            {' '}
            {icons.map(icon => (
              <Icon src={icon} />
            ))}
          </Icons>
        </Block>
        <Block>
          <Text
            typography={theme.typography.B_HEADLINE_6}
            margin="0 0 31px 0"
            maxWidth="285px"
            color={theme.colors.white}
          >
            {t('footer.quickLink')}
          </Text>
          {links.map(({ name }) => (
            <Text
              typography={theme.typography.R_PARAGRAPH_3}
              color={theme.colors.grey}
              margin="0 0 12px 0"
            >
              <CustomLink to="/">{name}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Text
            typography={theme.typography.B_HEADLINE_6}
            margin="0 0 31px 0"
            color={theme.colors.white}
          >
            Service
          </Text>
          {services.map(link => (
            <Text
              typography={theme.typography.R_PARAGRAPH_3}
              color={theme.colors.grey}
            >
              <CustomLink to="/">{link}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Text
            typography={theme.typography.B_HEADLINE_6}
            margin="0 0 31px 0"
            color={theme.colors.white}
          >
            Contact info
          </Text>
          {contacts.map(link => (
            <Text
              typography={theme.typography.R_PARAGRAPH_3}
              color={theme.colors.grey}
              margin="0 0 12px 0"
              maxWidth="230px"
            >
              {link}
            </Text>
          ))}
        </Block>
      </Information>
      <PrivacyInfo>
        <Text
          typography={theme.typography.R_PARAGRAPH_3}
          color={theme.colors.grey}
        >
          Ensome© 2022 All Rights Reserved
        </Text>
        <Container flex="space-between" width="400px">
          {languages.map(({ nativeName, lng }) => (
            <Button
              background="white"
              color="black"
              padding="5px 10px"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
            >
              {nativeName}
            </Button>
          ))}
        </Container>
        <SpaceBetween>
          <Text
            typography={theme.typography.R_PARAGRAPH_3}
            color={theme.colors.grey}
          >
            Privacy policy
          </Text>

          <Text
            typography={theme.typography.R_PARAGRAPH_3}
            color={theme.colors.grey}
          >
            Terms of us
          </Text>
        </SpaceBetween>
      </PrivacyInfo>
    </Content>
  )
}
