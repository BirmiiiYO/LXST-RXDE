import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'

import { Container, Info, List, Name, Price } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({
  name,
  value,
  infos,
  active,
  onClick,
}: IPriceCardProps) => (
  <Container active={active} onClick={onClick}>
    <Name>{name}</Name>
    <Price>{value === 'none' ? 'Custom' : `$${value}`}</Price>
    <PayPalButtons
      style={{
        color: 'silver',
        height: 48,
        layout: 'horizontal',
        shape: 'rect',
        label: 'subscribe',
      }}
      createOrder={(_data, actions) =>
        actions.order.create({
          purchase_units: [
            {
              description: name,
              amount: {
                value,
              },
            },
          ],
        })
      }
      onApprove={async (data, actions) => {
        if (actions.order !== undefined) {
          const order = await actions.order.capture()
          alert(`payment success${order}`)
        }
      }}
      onError={err => {
        alert(`PayPal Checkout onError${err}`)
      }}
      onCancel={() => {
        alert('payment canceled')
      }}
    />
    <List>
      {infos.map(info => (
        <Info>{info}</Info>
      ))}
    </List>
  </Container>
)
