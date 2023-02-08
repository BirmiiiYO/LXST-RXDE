import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BlogCard } from 'components/UI/Cards/Blog'
import blogPhoto from 'components/UI/Cards/Blog/blogPhoto.png'
import { PriceCard } from 'components/UI/Cards/Price'
import { ReviewCard } from 'components/UI/Cards/Review'
import avatar from 'components/UI/Cards/Review/avatar.png'
import { ServiceCard } from 'components/UI/Cards/Service'
import brain from 'components/UI/Cards/Service/brain.svg'
import { SolutionCard } from 'components/UI/Cards/Solution'
import { TeamCard } from 'components/UI/Cards/Team'
import teamAvatar from 'components/UI/Cards/Team/teamAvatar.png'

export default {
  title: 'All cards',
} as ComponentMeta<typeof SolutionCard>

const Solution: ComponentStory<typeof SolutionCard> = args => (
  <SolutionCard {...args} />
)
const Team: ComponentStory<typeof TeamCard> = args => <TeamCard {...args} />

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
