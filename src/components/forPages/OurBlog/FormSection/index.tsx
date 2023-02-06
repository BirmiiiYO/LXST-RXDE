import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { Form } from 'components/UI/Form'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { FormContainer } from './styles'

export const FormSection = () => {
  const { t } = useTranslation()
  return (
    <Container background="aliceBlue" flex="center">
      <FormContainer>
        <Container flex="column" padding="0 125px 0 0" background="aliceBlue">
          <Text typography="EbHeadline2" maxWidth="540px">
            {t('aboutUsPage.formTitle')}
          </Text>
          <Text typography="RParagraph2">{t('base.mediumText')}</Text>
        </Container>
        <Form />
      </FormContainer>
    </Container>
  )
}
