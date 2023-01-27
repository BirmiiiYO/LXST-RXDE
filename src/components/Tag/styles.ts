import styled from 'styled-components'

import { theme } from 'styles/themes'

export const StyledTag = styled.button`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeight.ExtraBold};
  background-color: ${theme.colors.white};
  font-size: 14px;
  line-height: 24px;
  padding: 3px 11px;
  border: 1px solid ${theme.colors.background};
  border-radius: 6px;
  &:not([disabled]):hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: none;
  }
  &:disabled {
    color: ${theme.colors.grey};
  }
`
