import React, { useState } from 'react'

import { Container } from 'components/UI/Container'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'
import { theme } from 'styles/themes'

import { Cards, CardsContainer, SpaceBetween } from './styles'
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
      <CardsContainer>
        <Text typography="EbHeadline2">{title}</Text>
        <SpaceBetween>
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
        </SpaceBetween>
      </CardsContainer>
      <Cards>{render(activeCards, amount)}</Cards>
    </Container>
  )
}
