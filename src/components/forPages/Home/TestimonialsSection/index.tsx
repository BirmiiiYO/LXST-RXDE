import React, { useState } from 'react'

import { ReviewCard } from 'components/UI/Cards/Review'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { cards } from 'mocks/homePage/ReviewCards'

import { Cards, Container, Controls, SpaceBetween, Title } from './styles'

export const TestImonialsSection = () => {
  const [aciveReviews, setActive] = useState(0)
  return (
    <Container>
      <SpaceBetween>
        <Title>Testimonials</Title>
        <Controls>
          <ControlsDirection
            direction="right"
            onClick={() => setActive(aciveReviews - 1)}
          />
          <ControlsDirection
            direction="left"
            onClick={() => setActive(aciveReviews + 1)}
          />
        </Controls>
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
