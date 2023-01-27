import React, { FC } from 'react'

import IconHi from 'assets/svg/smallIcons/icon_play_circle.svg'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({
  primary = true,
  size = 'medium',
  children,
  border = false,
  circle = false,
  icon,
  onClick,
}) => (
  <StyledButton
    primary={primary}
    size={size}
    border={border}
    circle={circle}
    onClick={onClick}
    icon={icon}
  >
    {children}
  </StyledButton>
)
