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
    <Container background="aliceBlue" margin="120px 0 0 0">
      <Content>
        <Text typography="EbHeadline2">{t('base.doYouNeedHelp')}</Text>
        <Text typography="RParagraph2" color="grey" margin="30px 0">
          {t('base.mediumText')}
        </Text>
        <Button>{t('base.contactUs')}</Button>
      </Content>
    </Container>
  )
}
