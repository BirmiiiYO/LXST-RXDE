import React from 'react'

import { RightIcon } from 'assets/svg/icons'

import { ControlButton } from './styles'
import { IControlsDirectionProps } from './types'

export const ControlsDirection = ({
  direction,
  disabled = false,
  onClick,
}: IControlsDirectionProps) => (
  <ControlButton disabled={disabled} onClick={onClick} direction={direction}>
    <RightIcon />
  </ControlButton>
)
