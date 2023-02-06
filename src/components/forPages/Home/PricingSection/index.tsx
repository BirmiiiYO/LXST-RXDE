import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { PriceCard } from 'components/UI/Cards/Price'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Cards } from './styles'

export const PricingSection = () => {
  const { t } = useTranslation()
  const cards = t('cards.price', { returnObjects: true }) as []
  const [activePrice, setActivePrice] = useState('Free trial')
  return (
    <Container width="1110px" margin="120px 0" flex="column">
      <Text typography="EbHeadline2" margin="0 0 50px 0">
        {t('homePage.ourPricingTitle')}
      </Text>
      <PayPalScriptProvider
        options={{ 'client-id': process.env.PAYPAL_CLIENT_key as string }}
      >
        <Cards>
          {cards.map(({ id, infos, name, value }) => (
            <PriceCard
              onClick={() => setActivePrice(name)}
              infos={infos}
              name={name}
              value={value}
              key={id}
              active={name === activePrice}
            />
          ))}
        </Cards>
      </PayPalScriptProvider>
    </Container>
  )
}
