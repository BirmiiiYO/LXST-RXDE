import React from 'react'

import directionIcon from './right.svg'
import { ControlButton, Icon } from './styles'
import { IControlsDirectionProps } from './types'

export const ControlsDirection = ({
  direction,
  disabled = false,
  onClick,
}: IControlsDirectionProps) => (
  <ControlButton disabled={disabled} onClick={onClick}>
    <Icon direction={direction} src={directionIcon} alt="direction" />
  </ControlButton>
)
