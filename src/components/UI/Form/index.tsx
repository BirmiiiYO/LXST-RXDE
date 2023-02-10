import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import {
  Container,
  ErrorMessage,
  Field,
  Input,
  Label,
  List,
  Title,
} from './styles'
import { Button } from '../Button'

const formSchema = yup.object().shape({
  email: yup.string().email('invalid').required(),
  name: yup.string().required(),
  theme: yup.string(),
  message: yup.string().max(100).required(),
})

export const Form = () => {
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      theme: '',
      message: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs.sendForm(
        'service_t2kqwuc',
        'template_u88b8dm',
        formRef.current as HTMLFormElement,
        'PzVgDgZCm337dkKD-',
      )
      resetForm()
    },
  })

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
          {/* <ErrorMessage name="name" /> */}
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
          {/* {formik.errors.email ? <ErrorMessage>zxc</ErrorMessage> : null} */}
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
          {/* <ErrorMessage name="theme" /> */}
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
          {/* <ErrorMessage name="message" /> */}
        </Field>
        <Button buttonType="primary" type="submit">
          Send
        </Button>
      </List>
      <div />
    </Container>
  )
}
