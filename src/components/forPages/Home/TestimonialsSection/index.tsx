import React, { useState } from 'react'

import { ReviewCard } from 'components/UI/Cards/Review'
import { Container } from 'components/UI/Container'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Text } from 'components/UI/Text'
import { cards } from 'mocks/homePage/ReviewCards'
import { theme } from 'styles/themes'

import { Cards, SpaceBetween } from './styles'

export const TestImonialsSection = () => {
  const [aciveReviews, setActive] = useState(0)
  return (
    <Container width="1110px" margin="0 0 120px 0" flex="column">
      <SpaceBetween>
        <Text typography={theme.typography.EB_HEADLINE_2}>Testimonials</Text>
        <Container width="240px" flex="space-between">
          <ControlsDirection
            direction="right"
            onClick={() => setActive(aciveReviews - 1)}
          />
          <ControlsDirection
            direction="left"
            onClick={() => setActive(aciveReviews + 1)}
          />
        </Container>
      </SpaceBetween>
      <Cards>
        {cards
          .slice(aciveReviews, aciveReviews + 3)
          .map(({ avatar, id, name, position, text }) => (
            <ReviewCard
              avatar={avatar}
              name={name}
              position={position}
              text={text}
              key={id}
            />
          ))}
      </Cards>
    </Container>
  )
}
