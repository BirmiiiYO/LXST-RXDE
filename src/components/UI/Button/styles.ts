import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'
import { setButtonStyles } from 'utils/setButtonStyles'

import { IButtonStyleProps } from './types'

export const StyledButton = styled.button<IButtonStyleProps>`
  ${theme.typography.B_HEADLINE_4}
  box-shadow: ${theme.shadows.shadowButton};
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  ${({ background }) => (background ? `background: ${background};` : '')}
  color:${({ color }) => color};
  ${({ buttonType }) => buttonType && setButtonStyles(buttonType)}
  &:hover {
    background: ${theme.colors.aliceBlue};
  }
  &:disabled {
    color: ${theme.colors.grey};
  }
`

export const Icon = styled.img`
  margin-right: 10px;
`
