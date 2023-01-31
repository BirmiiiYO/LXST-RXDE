import React from 'react'

import { BlogCard } from 'components/UI/Cards/Blog'
import { PriceCard } from 'components/UI/Cards/Price'
import { ReviewCard } from 'components/UI/Cards/Review'
import { ServiceCard } from 'components/UI/Cards/Service'
import { SolutionCard } from 'components/UI/Cards/Solution'
import { TeamCard } from 'components/UI/Cards/Team'

import blogPhoto from './Blog/blogPhoto.png'
import avatar from './Review/avatar.png'
import brain from './Service/brain.svg'
import teamAvatar from './Team/teamAvatar.png'

export const Cards = () => (
  <>
    <ServiceCard
      icon={brain}
      text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
      title="Machine learning"
    />
    <BlogCard
      date="22 June 2022"
      image={blogPhoto}
      name="Staffing software: key capabilities and top products"
      text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
      title="Sed ut perspiciatis unde omnis at vero blanditils"
      topics={['App', 'CIO', 'Future']}
    />
    <PriceCard
      infos={[
        'For small teams – 5 users',
        'Community support',
        'Individual data – 20GB',
      ]}
      name="Starter"
      text="Trial plan for starters"
      value="00$"
    />
    <ReviewCard
      avatar={avatar}
      name="Alex Bern"
      position="CEO by PixelPerfect"
      text="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” "
    />
    <SolutionCard
      advantages={[
        'Extract, transform, load (ETL)',
        'Extract, load, transform (ELT)',
        'Data governance',
      ]}
      title="Data integration"
    />
    <TeamCard
      avatar={teamAvatar}
      name="Sargis Grigor"
      position="Data analyst"
    />
  </>
)
