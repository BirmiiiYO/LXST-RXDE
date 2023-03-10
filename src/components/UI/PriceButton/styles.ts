import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

import { TPriceButtonStyleProps } from './types'

export const StyledPriceButton = styled.button<TPriceButtonStyleProps>`
  ${theme.typography.SB_HEADLINE_7}
  ${CENTER}
  width:100%;
  height: 44px;
  color: ${({ active }) =>
    active ? theme.colors.primary : theme.colors.white};
  background: ${({ active }) =>
    active ? theme.colors.white : theme.colors.primary};
  box-shadow: ${theme.shadows.shadowCard3};
  border-radius: 6px;
  border: none;
`
