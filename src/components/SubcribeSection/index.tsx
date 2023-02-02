import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { InputWithButton } from 'components/UI/InputWithButton'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Content, Info } from './styles'

export const SubscribeSection = () => {
  const { t } = useTranslation()
  return (
    <Container background={theme.colors.secondary} color={theme.colors.white}>
      <Content>
        {' '}
        <Info>
          <Text
            typography={theme.typography.EB_HEADLINE_2}
            color={theme.colors.white}
            margin="0 0 24px 0"
          >
            {t('base.subscribe')}
          </Text>
          <Text
            typography={theme.typography.R_PARAGRAPH_1}
            color={theme.colors.white}
          >
            {t('base.mediumText')}
          </Text>
        </Info>
        <InputWithButton />
      </Content>
    </Container>
  )
}
