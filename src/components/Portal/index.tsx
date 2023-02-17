import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import { CloseIcon } from 'assets'

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
  const closeModal = () => {
    setIsOpen(false)
  }
  if (!isOpen) {
    return null
  }
  return createPortal(
    <PortalContainer>
      <ModalContainer width={width} height={height}>
        {children}

        <CloseIcon onClick={closeModal} />
      </ModalContainer>
    </PortalContainer>,
    containerElement,
  )
}
