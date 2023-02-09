import React, { FC } from 'react'

import { theme } from 'styles/themes'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  buttonType = 'primary',
  disabled = false,
  icon,
  primary = true,
  typography = 'BHeadline4',
  padding = '15px 52px',
  children,
  onClick,
}) => (
  <>
    <StyledButton
      primary={primary}
      typography={typography}
      padding={padding}
      buttonType={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </StyledButton>
  </>
)
