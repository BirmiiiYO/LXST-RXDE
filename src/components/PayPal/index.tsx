import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useState } from 'react'

import { Button } from 'components/UI/Button'
import { Text } from 'components/UI/Text'

import { PayPalContainer } from './styles'
import { IPayPalProps } from './types'

export const PayPal = ({ name, value }: IPayPalProps) => {
  const [yearPrice, setYearPrice] = useState(false)
  const handleClick = () => {
    setYearPrice(!yearPrice)
  }
  return (
    <PayPalContainer>
      <Text center typography="EbHeadline3">
        Product: {name}
      </Text>
      <Text center typography="RParagraph1" color="indigo" margin="30px 0">
        price:{' '}
        {value === 'none'
          ? 'contact us'
          : yearPrice
          ? Number(value) * 12
          : value}
      </Text>
      <div>
        <Button onClick={handleClick} padding="5px 10px">
          {yearPrice ? 'Yearly' : 'Monthly'}
        </Button>
      </div>
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
    </PayPalContainer>
  )
}
