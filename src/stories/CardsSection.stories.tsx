import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CardsSection } from 'components/CardsSection'
import { BlogCard } from 'components/UI/Cards/Blog'
import { ReviewCard } from 'components/UI/Cards/Review'
import { cards } from 'mocks/homePage/BlogCards'
import { cardsR } from 'mocks/homePage/ReviewCards'

export default {
  title: 'Cards section',
  component: CardsSection,
} as ComponentMeta<typeof CardsSection>

const Template: ComponentStory<typeof CardsSection> = ({
  amount,
  length,
  title,
}) => (
  <CardsSection
    amount={amount}
    length={length}
    title={title}
    render={activeCards =>
      cardsR
        .slice(activeCards, activeCards + amount)
        .map(props => <ReviewCard {...props} />)
    }
  />
)

const Template1: ComponentStory<typeof CardsSection> = ({
  amount,
  length,
  title,
}) => (
  <CardsSection
    amount={amount}
    length={length}
    title={title}
    render={activeCards =>
      cards
        .slice(activeCards, activeCards + amount)
        .map(props => <BlogCard {...props} />)
    }
  />
)

export const ourBlog = Template1.bind({})
ourBlog.args = {
  amount: 2,
  length: cards.length,
  title: 'Our blog',
}

export const CustomersSay = Template.bind({})
CustomersSay.args = {
  amount: 3,
  length: cards.length,
  title: 'What our customers say',
}
