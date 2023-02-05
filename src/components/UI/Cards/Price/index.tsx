import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useState } from 'react'

import { Button } from 'components/UI/Button'
import { theme } from 'styles/themes'

import { Container, Info, List, Name, PayPalButton, Price } from './styles'
import { IPriceCardProps } from './types'

export const PriceCard = ({
  name,
  value,
  infos,
  active,
  onClick,
}: IPriceCardProps) => {
  const [paidFor, setPaidFor] = useState(false)

  const handleApprove = (orderId: any) => {
    if (orderId) {
      setPaidFor(true)
    }
  }
  const [error, setError] = useState('')

  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error)
  }
  if (paidFor) {
    alert('Thank you for your purchase!')
  }

  return (
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
            const order =
              (await actions.order.capture()) as unknown as typeof actions
            console.log('order', order)

            handleApprove(data.orderID)
          }
        }}
        onError={err => {
          setError(err.message as string)
          console.log('PayPal Checkout onError', err)
        }}
        onCancel={() => {
          // Display cancel message, modal or redirect user to cancel page or back to cart
        }}
        onClick={(_data, actions) => {
          // Validate on button click, client or server side
          const hasAlreadyBoughtCourse = false

          if (hasAlreadyBoughtCourse) {
            setError(
              'You already bought this course. Go to you account to view your list of courses.',
            )

            return actions.reject()
          }
          return actions.resolve()
        }}
      />
      <List>
        {infos.map(info => (
          <Info>{info}</Info>
        ))}
      </List>
    </Container>
  )
}
