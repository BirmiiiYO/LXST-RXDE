import React from 'react'

import { StyledButton, StyledInput } from './styles'
import { IInputWithButtonProps } from './types'
import { Container } from '../Container'

export const InputWithButton = ({
  disabled = false,
  isError = false,
}: IInputWithButtonProps) => (
  <Container flex="space-between" width="445px">
    <StyledInput
      type="text"
      placeholder="Your email"
      disabled={disabled}
      isError={isError}
    />
    <StyledButton disabled={disabled}>Send</StyledButton>
  </Container>
)
