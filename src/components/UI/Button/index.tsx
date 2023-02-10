import React, { FC } from 'react'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  buttonType = 'primary',
  disabled = false,
  icon,
  primary = true,
  typography = 'BHeadline6',
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
