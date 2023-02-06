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
    color: ${theme.colors.primary};
    svg {
      fill: ${theme.colors.primary};
      stroke: ${theme.colors.primary};
    }
  }
  &:disabled {
    color: ${theme.colors.grey};
    svg {
      fill: ${theme.colors.grey};
      stroke: ${theme.colors.primary};
    }
  }
  svg {
    margin-right: 10px;
  }
`

export const Icon = styled.img`
  margin-right: 10px;
`
