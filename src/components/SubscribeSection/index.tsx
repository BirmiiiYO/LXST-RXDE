import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { InputWithButton } from 'components/UI/InputWithButton'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

import { Info } from './styles'

export const SubscribeSection = () => {
  const { t } = useTranslation()
  return (
    <Section backgroundColor="secondary">
      <Container flex="space-between" padding="80px 0" background="secondary">
        {' '}
        <Info>
          <Text typography="EbHeadline2" color="white" margin="0 0 24px 0">
            {t('base.subscribe')}
          </Text>
          <Text typography="RParagraph1" color="white">
            {t('base.mediumText')}
          </Text>
        </Info>
        <InputWithButton />
      </Container>
    </Section>
  )
}
