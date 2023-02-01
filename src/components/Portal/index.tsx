import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import close from './close.svg'
import { Icon, ModalContainer, PortalContainer } from './styles'
import { IModalProps } from './types'

export const Modal: FC<IModalProps> = ({
  children,
  containerElement,
  isOpen,
  setIsOpen,
}) => {
  if (!isOpen) {
    return null
  }
  return createPortal(
    <PortalContainer>
      <ModalContainer>
        {children}
        <Icon src={close} alt="close demo" onClick={() => setIsOpen(false)} />
      </ModalContainer>
    </PortalContainer>,
    containerElement,
  )
}
