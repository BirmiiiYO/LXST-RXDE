import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Content } from './styles'

export const ContactUsSection = () => {
  const { t } = useTranslation()
  return (
    <Container background={theme.colors.aliceBlue}>
      <Content>
        <Text typography={theme.typography.EB_HEADLINE_2}>
          {t('base.doYouNeedHelp')}
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
          margin="30px 0"
        >
          {t('base.mediumText')}
        </Text>
        <Button>{t('base.contactUs')}</Button>
      </Content>
    </Container>
  )
}
