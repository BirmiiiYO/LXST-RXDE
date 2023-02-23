import { useFormik } from 'formik'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Container,
  ErrorMessage,
  Field,
  Input,
  Label,
  List,
  Title,
} from './styles'
import { form } from './validation'
import { Button } from '../Button'

export const Form = () => {
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const formik = useFormik(form(formRef))
  return (
    <Container>
      <Title>{t('base.contactUs')}</Title>
      <List ref={formRef} onSubmit={formik.handleSubmit}>
        <Field>
          <Label>Name</Label>
          <Input
            autoComplete="off"
            id="name"
            name="name"
            placeholder={t('base.enterName') as string}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input
            autoComplete="off"
            id="email"
            name="email"
            placeholder={t('base.enterEmail') as string}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <ErrorMessage />
        </Field>
        <Field>
          <Label>Theme</Label>
          <Input
            autoComplete="off"
            id="theme"
            name="theme"
            placeholder={t('base.enterTheme') as string}
            onChange={formik.handleChange}
            value={formik.values.theme}
          />
        </Field>
        <Field>
          <Label>Message</Label>
          <Input
            autoComplete="off"
            id="message"
            name="message"
            placeholder={t('base.enterMessage') as string}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </Field>
        <Button buttonType="primary" type="submit">
          {t('base.send')}
        </Button>
      </List>
      <div />
    </Container>
  )
}
