import React, { useState } from 'react'

import { Container } from 'components/UI/Container'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Cards, SpaceBetween } from './styles'
import { ISwitchCardsProps } from './types'

export const CardsSection = ({
  length,
  title,
  amount,
  render,
}: ISwitchCardsProps) => {
  const [activeCards, setActiveCards] = useState(0)
  const next = () => {
    setActiveCards(activeCards + 1)
  }
  const prev = () => {
    setActiveCards(activeCards - 1)
  }

  return (
    <Container width="1110px" flex="column" margin="157px 0 0 0">
      <SpaceBetween>
        <Text typography={theme.typography.EB_HEADLINE_2}>{title}</Text>
        <Container width="240px" flex="space-between">
          <ControlsDirection
            direction="right"
            onClick={prev}
            disabled={activeCards === 0}
          />
          <ControlsDirection
            direction="left"
            onClick={next}
            disabled={activeCards + amount === length}
          />
        </Container>
      </SpaceBetween>
      <Cards>{render(activeCards, amount)}</Cards>
    </Container>
  )
}
