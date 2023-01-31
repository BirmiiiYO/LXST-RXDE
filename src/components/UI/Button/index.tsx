import React, { FC } from 'react'

import { theme } from 'styles/themes'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  type = 'primary',
  disabled = false,
  background = theme.colors.primary,
  children,
  color = theme.colors.white,
  onClick,
}) => (
  <StyledButton
    color={color}
    background={background}
    buttonType={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)
