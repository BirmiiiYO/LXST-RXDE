import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BlogCard } from 'components/UI/Cards/Blog'
import { Container } from 'components/UI/Container'
import { ControlsDirection } from 'components/UI/ControlsDirection'
import { Text } from 'components/UI/Text'

import { Cards, SpaceBetween } from '../../../CardsSection/styles'

export const BlogSection = () => {
  const [activeReviews, setActive] = useState(0)
  const { t } = useTranslation()
  const cards = t('cards.blog', { returnObjects: true }) as []
  return (
    <Container width="1110px" margin="0 0 120px 0" flex="column">
      <SpaceBetween>
        <Text typography="EbHeadline2">{t('homePage.ourBlog')}</Text>
        <div>
          <ControlsDirection
            direction="right"
            onClick={() => setActive(activeReviews - 1)}
          />
          <ControlsDirection
            direction="left"
            onClick={() => setActive(activeReviews + 1)}
          />
        </div>
      </SpaceBetween>
      <Cards>
        {cards
          .slice(activeReviews, activeReviews + 2)
          .map(({ date, id, image, name, topics }) => (
            <BlogCard
              id={id}
              image={image}
              date={date}
              title={name}
              topics={topics}
              key={id}
            />
          ))}
      </Cards>
    </Container>
  )
}
