import React, { FC } from 'react'

import { theme } from 'styles/themes'

import { Icon, StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  buttonType = 'primary',
  disabled = false,
  icon,
  padding = '15px 52px',
  background = theme.colors.primary,
  children,
  color = theme.colors.white,
  onClick,
}) => (
  <>
    <StyledButton
      color={color}
      padding={padding}
      background={background}
      buttonType={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </StyledButton>
  </>
)
