import React, { useState } from 'react'

import { BlogCard } from 'components/UI/Cards/Blog'
import { ReviewCard } from 'components/UI/Cards/Review'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { cards } from 'mocks/homePage/BlogCards'

import {
  Cards,
  Container,
  SpaceBetween,
  Title,
} from '../TestimonialsSection/styles'

export const BlogSection = () => {
  const [aciveReviews, setActive] = useState(0)
  return (
    <Container>
      <SpaceBetween>
        <Title>Testimonials</Title>
        <div>
          <ControlsDirection
            direction="right"
            onClick={() => setActive(aciveReviews - 1)}
          />
          <ControlsDirection
            direction="left"
            onClick={() => setActive(aciveReviews + 1)}
          />
        </div>
      </SpaceBetween>
      <Cards>
        {cards
          .slice(aciveReviews, aciveReviews + 3)
          .map(({ date, id, image, name, text, title, topics }) => (
            <BlogCard
              image={image}
              date={date}
              name={name}
              title={title}
              text={text}
              topics={topics}
              key={id}
            />
          ))}
      </Cards>
    </Container>
  )
}
