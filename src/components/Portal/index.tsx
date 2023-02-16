import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import { CloseIcon } from 'assets'
import { Button } from 'components/UI/Button'

import { ModalContainer, PortalContainer } from './styles'
import { IModalProps } from './types'

export const Modal: FC<IModalProps> = ({
  children,
  containerElement,
  isOpen,
  height,
  width,
  setIsOpen,
}) => {
  if (!isOpen) {
    return null
  }
  return createPortal(
    <PortalContainer>
      <ModalContainer width={width} height={height}>
        {children}

        <CloseIcon onClick={() => setIsOpen(false)} />
      </ModalContainer>
    </PortalContainer>,
    containerElement,
  )
}
