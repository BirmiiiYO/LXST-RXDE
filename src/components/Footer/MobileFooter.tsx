import React from 'react'
import { useTranslation } from 'react-i18next'

import { footerIcons } from 'assets'
import WhiteLogo from 'assets/images/Logo.png'
import { Container } from 'components/UI/Container'
import { Image } from 'components/UI/Image'
import { SideBar } from 'components/UI/SideBar'
import { Text } from 'components/UI/Text'

import { SpaceBetween } from './styles'

export const MobileFooter = () => {
  const { t } = useTranslation()

  return (
    <Container flex="column" background="secondary" padding="10px">
      <Image width="141px" margin="0 0 20px 0" src={WhiteLogo} alt="logo" />
      <SideBar onClick={() => 1} color="white">
        {t('footer.quickLink')}
      </SideBar>
      <SideBar onClick={() => 1} color="white">
        {t('footer.service')}
      </SideBar>
      <SideBar onClick={() => 1} color="white">
        {t('footer.contactInfo')}
      </SideBar>
      <Container background="secondary" margin="20px 0" flex="space-between">
        <Text typography="RParagraph3" color="white" margin="0 0 10px 0">
          {t('footer.followUs')}
        </Text>
        <SpaceBetween>{footerIcons.map(icon => icon)}</SpaceBetween>
      </Container>
      <Container flex="space-between" background="secondary" padding="10px">
        <SpaceBetween>
          <Text typography="RParagraph3" color="white">
            {t('footer.privacyPolicy')}
          </Text>
          <Text typography="RParagraph3" color="white">
            {t('footer.termsOfUs')}
          </Text>
        </SpaceBetween>
      </Container>
      <Text typography="RParagraph3" color="steelTeal">
        Ensome© 2022 All Rights Reserved
      </Text>
    </Container>
  )
}
