import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, theme } from 'styles/themes'

import { IInputWithButtonProps, IInputWithButtonStyleProps } from './types'

export const Form = styled.form`
  width: 400px;
  height: 54px;
  display: flex;
  @media ${devices.tablet} {
    flex-direction: column;
    width: 100vw;
    height: 100%;
    justify-content: center;
  }
`

export const StyledInput = styled.input<IInputWithButtonProps>`
  width: 70%;
  height: 100%;
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
  @media ${devices.tablet} {
    border-radius: 6px;
    width: 100%;
    margin: 10px 0;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey};
    &::placeholder {
      color: ${theme.colors.grey};
    }
  }
`

export const StyledButton = styled.button<IInputWithButtonStyleProps>`
  width: 30%;
  ${CENTER}
  height:;
  ${theme.typography.B_HEADLINE_6}
  color: ${({ disabled }) =>
    disabled ? theme.colors.grey : theme.colors.black};
  background-color: ${theme.colors.white};
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
  }
  &:active {
    opacity: 1;
  }
  @media ${devices.tablet} {
    border-radius: 6px;
    width: 100%;
    padding: 15px 0;
    margin: 5px 0;
  }
`
