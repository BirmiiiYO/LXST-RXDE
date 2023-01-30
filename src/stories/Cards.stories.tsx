import { ComponentStory } from '@storybook/react'
import React from 'react'

import { AdvantageServiceCard } from 'components/UI/Cards/AdvantageService'
import brain from 'components/UI/Cards/AdvantageService/brain.svg'
import { BlogCard } from 'components/UI/Cards/Blog'
import blogPhoto from 'components/UI/Cards/Blog/blogPhoto.png'
import { PriceCard } from 'components/UI/Cards/Price'
import { ReviewCard } from 'components/UI/Cards/Review'
import avatar from 'components/UI/Cards/Review/avatar.png'
import { SolutionCard } from 'components/UI/Cards/Solution'
import { TeamCard } from 'components/UI/Cards/Team'
import teamAvatar from 'components/UI/Cards/Team/teamAvatar.png'

export default {
  title: 'All cards',
}

const AdvantageService: ComponentStory<typeof AdvantageServiceCard> = args => (
  <AdvantageServiceCard {...args} />
)
const Blog: ComponentStory<typeof BlogCard> = args => <BlogCard {...args} />
const Price: ComponentStory<typeof PriceCard> = args => <PriceCard {...args} />

const Review: ComponentStory<typeof ReviewCard> = args => (
  <ReviewCard {...args} />
)
const Solution: ComponentStory<typeof SolutionCard> = args => (
  <SolutionCard {...args} />
)
const Team: ComponentStory<typeof TeamCard> = args => <TeamCard {...args} />

export const AdvantageServiceCards = AdvantageService.bind({})
AdvantageServiceCards.args = {
  icon: brain,
  text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
  title: 'Machine learning',
}

export const BlogCards = Blog.bind({})
BlogCards.args = {
  date: '22 June 2022',
  image: blogPhoto,
  name: 'Staffing software: key capabilities and top products',
  text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
  title: 'Sed ut perspiciatis unde omnis at vero blanditils',
  topics: ['App', 'CIO', 'Future'],
}
export const PriceCards = Price.bind({})
PriceCards.args = {
  infos: [
    'For small teams – 5 users',
    'Community support',
    'Individual data – 20GB',
  ],
  name: 'Starter',
  text: 'Trial plan for starters',
  value: '00$',
}

export const ReviewCards = Review.bind({})
ReviewCards.args = {
  avatar,
  name: 'Alex Bern',
  position: 'CEO by PixelPerfect',
  text: '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”',
}
export const SolutionCards = Solution.bind({})
SolutionCards.args = {
  advantages: [
    'Extract, transform, load (ETL)',
    'Extract, load, transform (ELT)',
    'Data governance',
  ],
  title: 'Data integration',
}
export const TeamCards = Team.bind({})
TeamCards.args = {
  avatar: teamAvatar,
  name: 'Sargis Grigor',
  position: 'Data analyst',
}
