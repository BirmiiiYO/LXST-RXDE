import React, { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import WhiteLogo from 'assets/images/Logo.png'
import { footerIcons } from 'assets/index'
import { Container } from 'components/UI/Container'
import { Image } from 'components/UI/Image'
import { Text } from 'components/UI/Text'
import { contacts } from 'constants/contacts'
import { languages } from 'constants/languages'
import { links } from 'constants/links'

import {
  Block,
  Content,
  CustomLink,
  Icons,
  LangIcon,
  PrivacyInfo,
  SpaceBetween,
} from './styles'

export const DesktopFooter = () => {
  const { t, i18n } = useTranslation()
  const services = t('footer.services', { returnObjects: true }) as []

  const changeLng = (e: MouseEvent<HTMLElement>) => {
    i18n.changeLanguage(e.target.id)
  }
  return (
    <Content>
      <Container
        flex="space-between"
        margin="0 0 50px 0"
        background="secondary"
      >
        <Block>
          <Image width="141px" margin="0 0 20px 0" src={WhiteLogo} alt="logo" />
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
            {t('footer.service')}
          </Text>
          {services.map(link => (
            <Text typography="RParagraph3" color="grey">
              <CustomLink to="/">{link}</CustomLink>
            </Text>
          ))}
        </Block>
        <Block>
          <Text typography="BHeadline6" margin="0 0 31px 0" color="white">
            {t('footer.contactInfo')}
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
          {languages.map(lng => (
            <LangIcon key={lng} id={lng} onClick={changeLng}>
              {lng}
            </LangIcon>
          ))}
        </Container>
        <SpaceBetween>
          <Text typography="RParagraph3" color="grey">
            {t('footer.privacyPolicy')}
          </Text>

          <Text typography="RParagraph3" color="grey">
            {t('footer.termsOfUs')}
          </Text>
        </SpaceBetween>
      </PrivacyInfo>
    </Content>
  )
}
