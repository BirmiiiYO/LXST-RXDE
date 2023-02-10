import styled from 'styled-components'

import { theme } from 'styles/themes'

import { IInputWithButtonProps, IInputWithButtonStyleProps } from './types'

export const StyledInput = styled.input<IInputWithButtonProps>`
  width: 320px;
  height: 54px;
  border: none;
  padding: 15px 25px;
  ${theme.typography.SB_PARAGRAPH_3}
  color: ${({ disabled, isError }) =>
    disabled
      ? theme.colors.grey
      : isError
      ? theme.colors.redError
      : theme.colors.black};
  background-color: ${({ disabled, isError }) =>
    disabled
      ? theme.colors.rhythmicBlue
      : isError
      ? theme.colors.redError
      : theme.colors.rhythmicBlue};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &::placeholder {
    color: ${({ disabled }) =>
      disabled ? theme.colors.grey : theme.colors.black};
  }
  &:focus {
    outline: none;
  }
`

export const StyledButton = styled.button<IInputWithButtonStyleProps>`
  width: 125px;
  height: 54px;
  ${theme.typography.B_HEADLINE_6}
  color: ${({ disabled }) =>
    disabled ? theme.colors.grey : theme.colors.black};
  background-color: ${theme.colors.white};
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  user-select: none;
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
  }
  &:active {
    opacity: 1;
  }
`
