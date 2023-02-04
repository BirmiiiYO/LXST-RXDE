import emailjs from '@emailjs/browser'
import React, { ChangeEvent, useRef } from 'react'

import { StyledButton, StyledInput } from './styles'
import { IInputWithButtonProps } from './types'
import { Container } from '../Container'

export const InputWithButton = ({
  disabled = false,
  isError = false,
}: IInputWithButtonProps) => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_t2kqwuc',
      'template_ajoy4bs',
      form.current as HTMLFormElement,
      'PzVgDgZCm337dkKD-',
    )

    if (form.current !== null) {
      ;(form.current[0] as HTMLInputElement).value = ''
    }
  }

  return (
    <Container flex="space-between" width="445px">
      <form ref={form} onSubmit={sendEmail}>
        <StyledInput
          type="text"
          placeholder="Your email"
          name="user_email"
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
