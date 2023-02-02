import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Container, Input } from './styles'

export const InputWithButton = () => {
  const { t } = useTranslation()
  return (
    <Container>
      {' '}
      <Input />
      <Button>{t('base.send')}</Button>
    </Container>
  )
}
