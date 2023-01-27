import styled from 'styled-components'

import { theme } from 'styles/themes'

import { IStyleProps } from './types'

export const StyledButton = styled.button<IStyleProps>`
  background-color: ${({ primary }) => (primary ? theme.colors.primary : null)};
  color: ${({ primary }) =>
    primary ? theme.colors.white : theme.colors.black};
  padding: 15px 52px;
  border: ${({ border }) => (border ? '1px solid #467DFF' : 'none')};
  border-radius: ${({ circle }) =>
    circle ? theme.BORDER_RADIUS.CIRCLE : theme.BORDER_RADIUS.S}px;
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeight.Bold};
  font-size: 16px;
  line-height: 24px;
  box-shadow: ${theme.shadows.shadowButton};
  ${({ icon }) => {
    if (icon) {
      return `
      &::before {
      content: url(${icon});
      margin-right: 10px;
      }`
    }
    return ''
  }}
  &:hover {
    background-color: #467dff;
  }
  &:disabled {
    background-color: ${theme.colors.grey};
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
  }
`
