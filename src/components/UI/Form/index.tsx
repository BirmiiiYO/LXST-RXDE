import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Field, Input, Label, List, Title } from './styles'
import { Button } from '../Button'

export const Form = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Title>{t('base.contactUs')}</Title>
      <List>
        <Field>
          <Label>Name</Label>
          <Input placeholder={t('base.enterName') as string} />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input placeholder={t('base.enterEmail') as string} />
        </Field>
        <Field>
          <Label>Theme</Label>
          <Input placeholder={t('base.enterTheme') as string} />
        </Field>
        <Field>
          <Label>Massage</Label>
          <Input placeholder={t('base.enterMessage') as string} />
        </Field>
      </List>
      <div>
        <Button>Send</Button>
      </div>
    </Container>
  )
}
