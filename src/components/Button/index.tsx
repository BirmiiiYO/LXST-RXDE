import React, { FC } from 'react'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  type = 'primary',
  disabled = false,
  children,
  onClick,
}) => (
  <StyledButton buttonType={type} disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
)
