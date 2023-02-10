import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import React, { useRef } from 'react'
import * as yup from 'yup'

import { StyledButton, StyledInput } from './styles'
import { IInputWithButtonProps } from './types'
import { Container } from '../Container'

const contactSchema = yup.object().shape({
  user_email: yup.string().email('invalid').required(),
})

export const InputWithButton = ({
  disabled = false,
  isError = false,
}: IInputWithButtonProps) => {
  const form = useRef<HTMLFormElement>(null)

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
    <Container flex="space-between" width="445px" background="secondary">
      <form ref={form} onSubmit={formik.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Your email"
          autoComplete="off"
          id="user_email"
          name="user_email"
          onChange={formik.handleChange}
          value={formik.values.user_email}
          disabled={disabled}
          isError={isError}
        />
        <StyledButton disabled={disabled} type="submit">
          Send
        </StyledButton>
      </form>
    </Container>
  )
}

// {formik.errors.user_email ? <div>error</div> : null}
