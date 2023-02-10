import React, { useState } from 'react'

import { CheckMarkIcon } from 'assets/index'
import { PayPal } from 'components/PayPal'
import { Modal } from 'components/Portal'
import { PriceButton } from 'components/UI/PriceButton'

import { Container, Info, List, Name, Price } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({
  name,
  value,
  infos,
  active,
  onClick,
}: IPriceCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const openPayPal = () => {
    window.open(
      '/paypal',
      'ModalPopUp',
      'toolbar=no,' +
        'scrollbars=no,' +
        'location=no,' +
        'statusbar=no,' +
        'menubar=no,' +
        'resizable=0,' +
        'width=400,' +
        'height=400,',
    )
  }
  return (
    <>
      <Container active={active} onClick={onClick}>
        <Name>{name}</Name>
        <Price>{value === 'none' ? 'Custom' : `$${value}`}</Price>
        <PriceButton onClick={openPayPal} active={active} />
        <List>
          {infos.map(info => (
            <Info>
              <CheckMarkIcon />
              {info}
            </Info>
          ))}
        </List>
      </Container>
      <Modal
        containerElement={document.body}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width="300px"
        height="200px"
      >
        <PayPal name={name} value={value} />
      </Modal>
    </>
  )
}
