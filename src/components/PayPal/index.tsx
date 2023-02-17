import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'

import { Text } from 'components/UI/Text'

import { PayPalContainer } from './styles'
import { IPayPalProps } from './types'

export const PayPal = ({ name, value }: IPayPalProps) => (
  <PayPalContainer>
    <Text center typography="EbHeadline3">
      Product: {name}
    </Text>
    <Text center typography="RParagraph1" color="indigo" margin="30px 0">
      price: {value !== 'none' ? value : 'contact us'}
    </Text>
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
