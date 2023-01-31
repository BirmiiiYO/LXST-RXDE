import React, { useState } from 'react'

import { ReviewCard } from 'components/UI/Cards/Review'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Title } from 'components/UI/Title'
import { cards } from 'mocks/homePage/ReviewCards'
import { theme } from 'styles/themes'

import { Cards, Container, Controls, SpaceBetween } from './styles'

export const TestImonialsSection = () => {
  const [aciveReviews, setActive] = useState(0)
  return (
    <Container>
      <SpaceBetween>
        <Title typography={theme.typography.EB_HEADLINE_2}>Testimonials</Title>
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
