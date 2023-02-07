import React from 'react'
import { useTranslation } from 'react-i18next'

import WhiteLogo from 'assets/images/Logo.png'
import { footerIcons } from 'assets/index'
import { languageIcons } from 'assets/svg/languageIcons'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { links } from 'constants/links'

import {
  Block,
  Content,
  CustomLink,
  Icons,
  LangIcon,
  Logo,
  PrivacyInfo,
  SpaceBetween,
} from './styles'

const contacts = [
  'ensome@info.co.us',
  '+1 601-201-5580',
  '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
]

export const DesktopFooter = () => {
  const { t, i18n } = useTranslation()
  const services = t('footer.services', { returnObjects: true }) as []
  return (
    <Content>
      <Container
        flex="space-between"
        margin="0 0 50px 0"
        background="secondary"
      >
        <Block>
          <Logo src={WhiteLogo} alt="logo" />
          <Text typography="RParagraph3" color="grey" maxWidth="285px">
            {t('base.smallText')}
          </Text>
          <Icons> {footerIcons.map(icon => icon)}</Icons>
        </Block>
        <Block>
          <Text
            typography="BHeadline6"
            margin="0 0 31px 0"
            maxWidth="285px"
            color="white"
          >
            {t('footer.quickLink')}
          </Text>
          {links.map(({ name }) => (
            <Text typography="RParagraph3" color="grey" margin="0 0 12px 0">
              <CustomLink to="/">{name}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Text typography="BHeadline6" margin="0 0 31px 0" color="white">
            Service
          </Text>
          {services.map(link => (
            <Text typography="RParagraph3" color="grey">
              <CustomLink to="/">{link}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Text typography="BHeadline6" margin="0 0 31px 0" color="white">
            Contact info
          </Text>
          {contacts.map(link => (
            <Text
              typography="RParagraph3"
              color="grey"
              margin="0 0 12px 0"
              maxWidth="230px"
            >
              {link}
            </Text>
          ))}
        </Block>
      </Container>
      <PrivacyInfo>
        <Text typography="RParagraph3" color="grey">
          Ensome© 2022 All Rights Reserved
        </Text>
        <Container flex="space-between" width="400px" background="secondary">
          {languageIcons.map(({ component, lng }) => (
            <LangIcon key={lng} onClick={() => i18n.changeLanguage(lng)}>
              {component}
            </LangIcon>
          ))}
        </Container>
        <SpaceBetween>
          <Text typography="RParagraph3" color="grey">
            Privacy policy
          </Text>

          <Text typography="RParagraph3" color="grey">
            Terms of us
          </Text>
        </SpaceBetween>
      </PrivacyInfo>
    </Content>
  )
}
