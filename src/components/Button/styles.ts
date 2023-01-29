import styled from 'styled-components'

import { theme } from 'styles/themes'
import { setButtonStyles } from 'utils/setButtonStyles'

import { IButtonStyleProps } from './types'

export const StyledButton = styled.button<IButtonStyleProps>`
  ${theme.typography.B_HEADLINE_4}
  box-shadow: ${theme.shadows.shadowButton};
  display: flex;
  align-items: center;
  ${({ buttonType }) => setButtonStyles(buttonType)}
`
