import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BlogCard } from 'components/UI/Cards/Blog'
import { Container } from 'components/UI/Container'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Text } from 'components/UI/Text'
import { cards } from 'mocks/homePage/BlogCards'
import { theme } from 'styles/themes'

import { Cards, SpaceBetween } from '../TestimonialsSection/styles'

export const BlogSection = () => {
  const [aciveReviews, setActive] = useState(0)
  const { t } = useTranslation()
  return (
    <Container width="1110px" margin="0 0 120px 0" flex="column">
      <SpaceBetween>
        <Text typography={theme.typography.EB_HEADLINE_2}>
          {t('homePage.ourBlog')}
        </Text>
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
          .slice(aciveReviews, aciveReviews + 2)
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
