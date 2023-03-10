import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import { useAppSelector } from 'hooks/Redux'

import { Form, StyledButton, StyledInput } from './styles'
import { IInputWithButtonProps } from './types'

const contactSchema = yup.object().shape({
  user_email: yup.string().email('invalid').required(),
})

export const InputWithButton = ({
  disabled = false,
  isError = false,
}: IInputWithButtonProps) => {
  const form = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const formik = useFormik({
    initialValues: {
      user_email: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs.sendForm(
        'service_t2kqwuc',
        'template_ajoy4bs',
        form.current as HTMLFormElement,
        'PzVgDgZCm337dkKD-',
      )
      resetForm()
    },
  })

  return (
    <>
      <Form ref={form} onSubmit={formik.handleSubmit}>
        <StyledInput
          type="text"
          placeholder={t('base.email') as string}
          autoComplete="off"
          id="user_email"
          name="user_email"
          onChange={formik.handleChange}
          value={formik.values.user_email}
          disabled={disabled}
          isError={isError}
        />
        <StyledButton disabled={disabled} type="submit">
          {!isMobile ? t('base.send') : t('base.subscribe')}
        </StyledButton>
      </Form>
    </>
  )
}

// {formik.errors.user_email ? <div>error</div> : null}
