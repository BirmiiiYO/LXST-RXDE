import React, { useState } from 'react'

import { CheckMarkIcon } from 'assets/svg/icons'
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
    setIsOpen(true)
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
