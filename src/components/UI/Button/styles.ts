import styled from 'styled-components'

import { theme } from 'styles/themes'
import { setButtonStyles } from 'utils/setButtonStyles'

import { IButtonStyleProps } from './types'

export const StyledButton = styled.button<IButtonStyleProps>`
  ${theme.typography.B_HEADLINE_4}
  box-shadow: ${theme.shadows.shadowButton};
  display: flex;
  align-items: center;
  ${({ background }) => (background ? `background: ${background};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ buttonType }) => setButtonStyles(buttonType)}
  &:hover {
    ${({ background }) =>
      background
        ? `background: ${background};`
        : `background: ${theme.colors.bluberry};`}
}
  }
  &:active {
    ${({ background }) =>
      background
        ? `background: ${background};`
        : `background: ${theme.colors.bluberry};`}
  }
  &:disabled {
    color: ${theme.colors.grey};
  }
`
