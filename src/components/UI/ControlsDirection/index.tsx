import React from 'react'

import directionIcon from './right.svg'
import { ControlButton, Icon } from './styles'
import { IControlsDirectionProps } from './types'

export const ControlsDirection = ({
  direction,
  disabled,
}: IControlsDirectionProps) => (
  <ControlButton disabled={disabled}>
    <Icon direction={direction} src={directionIcon} alt="direction" />
  </ControlButton>
)
